import mysql.connector
from app.core.config import settings

def get_connection():
    try:
        conn = mysql.connector.connect(
            host=settings.DB_HOST,
            user=settings.DB_USER,
            password=settings.DB_PASSWORD,
            database=settings.DB_NAME,
            port=settings.DB_PORT
        )
        return conn
    
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None
   
