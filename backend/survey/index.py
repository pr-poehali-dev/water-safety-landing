import json
import os
import urllib.request
import urllib.parse
from datetime import datetime

def handler(event: dict, context) -> dict:
    """
    API для обработки анкет-заявок и отправки данных в Telegram
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
        body_str = event.get('body', '{}')
        body = json.loads(body_str) if body_str else {}
        step = body.get('step', 1)
        data = body.get('data', {})
        
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '8138166184:AAEmrLlIrt8vNzNP-CmEJ0OxYSvmy3Rh6i4')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID', '-4547028062')
        
        if step == 1:
            message = """Новая заявка - Шаг 1

Контактная информация:
Имя: {name}
Email: {email}
Телефон: {phone}
Компания: {company}
Должность: {position}

Дата: {date}
Заявка не завершена (пользователь на шаге 1)""".format(
                name=data.get('name', 'Не указано'),
                email=data.get('email', 'Не указано'),
                phone=data.get('phone', 'Не указано'),
                company=data.get('company', 'Не указано'),
                position=data.get('position', 'Не указано'),
                date=datetime.now().strftime('%d.%m.%Y %H:%M')
            )
        else:
            object_types = {
                'pool': 'Бассейн',
                'aquapark': 'Аквапарк',
                'sports': 'Спортивный комплекс',
                'hotel': 'Гостиничный комплекс',
                'sanatorium': 'Санаторий',
                'other': 'Другое'
            }
            
            budget_ranges = {
                'under1m': 'До 1 млн ₽',
                '1-3m': '1-3 млн ₽',
                '3-5m': '3-5 млн ₽',
                'over5m': 'Более 5 млн ₽',
                'tender': 'В рамках тендера'
            }
            
            timeline_options = {
                'urgent': 'Срочно (1-2 месяца)',
                'normal': 'Стандартный (3-6 месяцев)',
                'planning': 'На этапе проектирования',
                'flexible': 'Гибкие сроки'
            }
            
            message = """ПОЛНАЯ ЗАЯВКА - Шаг 2 завершен

Контактная информация:
Имя: {name}
Email: {email}
Телефон: {phone}
Компания: {company}
Должность: {position}

Информация о проекте:
Тип объекта: {object_type}
Размер: {pool_size}
Посещаемость: {visitors}
Текущие меры: {current_safety}
Бюджет: {budget}
Сроки: {timeline}
Доп. информация: {additional}

Дата: {date}""".format(
                name=data.get('name', 'Не указано'),
                email=data.get('email', 'Не указано'),
                phone=data.get('phone', 'Не указано'),
                company=data.get('company', 'Не указано'),
                position=data.get('position', 'Не указано'),
                object_type=object_types.get(data.get('objectType', ''), 'Не указано'),
                pool_size=data.get('poolSize', 'Не указано'),
                visitors=data.get('visitorsCount', 'Не указано'),
                current_safety=data.get('currentSafety', 'Не указано'),
                budget=budget_ranges.get(data.get('budget', ''), 'Не указано'),
                timeline=timeline_options.get(data.get('timeline', ''), 'Не указано'),
                additional=data.get('additionalInfo', 'Не указано'),
                date=datetime.now().strftime('%d.%m.%Y %H:%M')
            )
        
        telegram_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
        payload = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': message
        }).encode('utf-8')
        
        req = urllib.request.Request(telegram_url, data=payload)
        
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'step': step,
                'telegram_sent': result.get('ok', False)
            }),
            'isBase64Encoded': False
        }
        
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