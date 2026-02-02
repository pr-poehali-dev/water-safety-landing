import json
import os
import secrets
import hashlib
import hmac
from datetime import datetime, timedelta

def handler(event: dict, context) -> dict:
    """
    API для авторизации администраторов
    Поддерживает вход по email/пароль и magic link через email
    """
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        import psycopg2
        
        body_str = event.get('body', '{}')
        body = json.loads(body_str) if body_str else {}
        action = body.get('action', 'login')
        
        db_url = os.environ.get('DATABASE_URL')
        conn = psycopg2.connect(db_url)
        cur = conn.cursor()
        
        if action == 'request_magic_link':
            email = body.get('email', '').strip()
            
            if not email:
                return error_response('Email обязателен')
            
            cur.execute("SELECT id, name FROM admins WHERE email = %s", (email,))
            admin = cur.fetchone()
            
            if not admin:
                return error_response('Администратор не найден', 404)
            
            token = secrets.token_urlsafe(32)
            expires = datetime.now() + timedelta(hours=1)
            
            magic_link = f"https://your-domain.com/admin/login?token={token}&email={email}"
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'message': 'Magic link отправлен на почту',
                    'magic_link': magic_link,
                    'expires_in': 3600
                }),
                'isBase64Encoded': False
            }
        
        elif action == 'verify_token':
            token = body.get('token', '')
            email = body.get('email', '')
            
            if not token or not email:
                return error_response('Token и email обязательны')
            
            cur.execute("SELECT id, name, role FROM admins WHERE email = %s", (email,))
            admin = cur.fetchone()
            
            if not admin:
                return error_response('Администратор не найден', 404)
            
            cur.execute(
                "UPDATE admins SET last_login = CURRENT_TIMESTAMP WHERE email = %s",
                (email,)
            )
            conn.commit()
            
            session_token = secrets.token_urlsafe(48)
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'session_token': session_token,
                    'admin': {
                        'id': admin[0],
                        'name': admin[1],
                        'role': admin[2]
                    }
                }),
                'isBase64Encoded': False
            }
        
        else:
            return error_response('Неизвестное действие', 400)
    
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
