import json
import os

def handler(event: dict, context) -> dict:
    """
    API для админ-панели: управление контентом, заявками, документами
    """
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Session-Token'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    try:
        import psycopg2
        
        db_url = os.environ.get('DATABASE_URL')
        conn = psycopg2.connect(db_url)
        cur = conn.cursor()
        
        path = event.get('path', '/')
        query_params = event.get('queryStringParameters', {}) or {}
        
        if method == 'GET':
            resource = query_params.get('resource', 'content')
            
            if resource == 'content':
                cur.execute("SELECT id, section, key, value, updated_at FROM site_content ORDER BY section, key")
                rows = cur.fetchall()
                
                content = []
                for row in rows:
                    content.append({
                        'id': row[0],
                        'section': row[1],
                        'key': row[2],
                        'value': row[3],
                        'updated_at': row[4].isoformat() if row[4] else None
                    })
                
                return success_response({'content': content})
            
            elif resource == 'surveys':
                limit = int(query_params.get('limit', 50))
                offset = int(query_params.get('offset', 0))
                
                cur.execute("""
                    SELECT id, step, name, email, phone, company, position,
                           object_type, pool_size, visitors_count, budget, timeline,
                           status, created_at, completed_at
                    FROM survey_submissions
                    ORDER BY created_at DESC
                    LIMIT %s OFFSET %s
                """, (limit, offset))
                
                rows = cur.fetchall()
                surveys = []
                for row in rows:
                    surveys.append({
                        'id': row[0],
                        'step': row[1],
                        'name': row[2],
                        'email': row[3],
                        'phone': row[4],
                        'company': row[5],
                        'position': row[6],
                        'object_type': row[7],
                        'pool_size': row[8],
                        'visitors_count': row[9],
                        'budget': row[10],
                        'timeline': row[11],
                        'status': row[12],
                        'created_at': row[13].isoformat() if row[13] else None,
                        'completed_at': row[14].isoformat() if row[14] else None
                    })
                
                cur.execute("SELECT COUNT(*) FROM survey_submissions")
                total = cur.fetchone()[0]
                
                return success_response({
                    'surveys': surveys,
                    'total': total,
                    'limit': limit,
                    'offset': offset
                })
            
            elif resource == 'documents':
                cur.execute("""
                    SELECT id, title, description, file_url, file_type, 
                           category, is_visible, created_at
                    FROM documents
                    ORDER BY created_at DESC
                """)
                
                rows = cur.fetchall()
                documents = []
                for row in rows:
                    documents.append({
                        'id': row[0],
                        'title': row[1],
                        'description': row[2],
                        'file_url': row[3],
                        'file_type': row[4],
                        'category': row[5],
                        'is_visible': row[6],
                        'created_at': row[7].isoformat() if row[7] else None
                    })
                
                return success_response({'documents': documents})
        
        elif method == 'PUT':
            body_str = event.get('body', '{}')
            body = json.loads(body_str) if body_str else {}
            resource = body.get('resource', 'content')
            
            if resource == 'content':
                content_id = body.get('id')
                value = body.get('value')
                
                cur.execute(
                    "UPDATE site_content SET value = %s, updated_at = CURRENT_TIMESTAMP WHERE id = %s",
                    (value, content_id)
                )
                conn.commit()
                
                return success_response({'message': 'Контент обновлен'})
        
        return error_response('Неизвестный запрос', 400)
    
    except Exception as e:
        import traceback
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': False,
                'error': str(e),
                'traceback': traceback.format_exc()
            }),
            'isBase64Encoded': False
        }
    finally:
        if 'cur' in locals():
            cur.close()
        if 'conn' in locals():
            conn.close()

def success_response(data: dict) -> dict:
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(data),
        'isBase64Encoded': False
    }

def error_response(message: str, status_code: int = 400) -> dict:
    return {
        'statusCode': status_code,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': False,
            'error': message
        }),
        'isBase64Encoded': False
    }
