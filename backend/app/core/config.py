# app/core/config.py

# for local MySQL database connection


class Settings:
    DB_HOST = "localhost"
    DB_USER = "root"
    DB_PASSWORD = ""   # set your XAMPP password if any
    DB_NAME = "meet2doctor"
    DB_PORT = 3306


# for remote MySQL database connection
'''
class Settings:
    DB_HOST = "m2docdb.cf02oqeo8e6w.ap-south-1.rds.amazonaws.com"
    DB_USER = "admin"
    DB_PASSWORD = "BlueBlueMoon#92"
    DB_NAME = "meet2doctor"
    DB_PORT = 3306
    

'''

# ✅ create an instance of Settings so we can import it everywhere
settings = Settings()


class JWTHandler:
    SECRET_KEY = "h7@d99f8g7g6h5j4k3l2m1n0p9o8q7r6jddjdj"  
    ALGORITHM = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES = 60 # 1 hour

#create the instance of JWTHandler so  use it everywhere
jwthandler = JWTHandler()

