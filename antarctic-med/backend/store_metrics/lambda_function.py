import boto3
import json
import uuid
from datetime import datetime
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('MetricsTable')

REQUIRED_METRICS = \
[
    'total_number_of_wrong_selections',
    'total_number_of_correct_selections',
    'time_from_start_of_game_to_end_of_game',
    'time_from_start_of_game_to_first_selection',
    'wrong_selection_correct_color_wrong_shape',
    'wrong_selection_correct_shape_wrong_color',
    'wrong_selection_wrong_shape_wrong_color',
    'wrong_selection_missed_a_selection',
    'mean_time_between_selections',
    'median_time_between_selections',
    'longest_streak'
]


CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

def lambda_handler(event, context):
    method = event.get('requestContext', {}).get('http', {}).get('method', '')
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': CORS_HEADERS,
            'body': json.dumps('Method Not Allowed')
        }
    
    try:
        data = json.loads(event['body'])
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': CORS_HEADERS,
            'body': json.dumps('Bad Request: Invalid JSON')
        }
    
    if not isinstance(data, dict):
        return {
            'statusCode': 400,
            'headers': CORS_HEADERS,
            'body': json.dumps('Bad Request: data should be formatted such that metric names are keys.')
        }

    for metric in REQUIRED_METRICS:
        if metric not in data:
            return {
                'statusCode': 400,
                'headers': CORS_HEADERS,
                'body': json.dumps('Bad Request: missing one or more required metrics.')
            }

    array_to_string = lambda value: ','.join(map(str, value)) if isinstance(value, list) and len(value) > 0 else (None if isinstance(value, list) else value)

    timestamp = datetime.now().isoformat()
    item = {
        'id': str(uuid.uuid4()),
        'timestamp': timestamp
    }
    for metric in REQUIRED_METRICS:
        value = data.get(metric)
        if value is None:
            return {
                'statusCode': 400,
                'headers': CORS_HEADERS,
                'body': json.dumps(f'Bad Request: metric {metric} has an invalid value.')
            }
        if isinstance(value, list):
            value = ','.join(map(str, value)) if value else None
        if isinstance(value, (int, float)):
            value = Decimal(str(value))
        item[metric] = value
    try:
        table.put_item(Item = item)

        return {
            'statusCode': 200,
            'headers': CORS_HEADERS,
            'body': json.dumps({'message': 'Metrics stored', 'item': item}, default = str)
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': CORS_HEADERS,
            'body': json.dumps(f'Error storing metrics: {str(e)}')
        }
