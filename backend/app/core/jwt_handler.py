# app/core/jwt_handler.py
from datetime import datetime, timedelta
from jose import JWTError, jwt
from app.core.config import jwthandler
from fastapi import HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer
from app.core.logging import logger

# Token endpoint for FastAPI security
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")

# Create JWT Token
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=jwthandler.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire, "scope": "access_token"})
    return jwt.encode(to_encode, jwthandler.SECRET_KEY, algorithm=jwthandler.ALGORITHM)

# Verify JWT Token
def verify_token(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, jwthandler.SECRET_KEY, algorithms=[jwthandler.ALGORITHM])
        logger.info(f"the coming payload is {payload}")
        user_id: str = payload.get("user_id")
        role: str = payload.get("role")
        pdid: str = payload.get("pdid")
        if user_id is None:
            raise HTTPException(status_code=401, detail="Invalid token")

        logger.info("Token verified successfully - {}".format(payload))
        return {"user_id": user_id, "role": role,"pdid": pdid}
    except JWTError:
        raise HTTPException(status_code=401, detail="Token expired or invalid")

# Decode JWT Token without verification (use with caution)   
def create_refresh_token(data: dict):
    expire = datetime.utcnow() + timedelta(days=7)  # valid for 7 days
    to_encode = data.copy()
    to_encode.update({"exp": expire, "scope": "refresh_token"})
    return jwt.encode(to_encode, jwthandler.SECRET_KEY, algorithm=jwthandler.ALGORITHM)

# ------------------------
# Verify Refresh Token
# ------------------------
def verify_refresh_token(token: str):
    try:
        payload = jwt.decode(token, jwthandler.SECRET_KEY, algorithms=[jwthandler.ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(status_code=401, detail="Refresh token expired or invalid")
