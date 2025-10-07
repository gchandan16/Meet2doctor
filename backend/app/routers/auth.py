# backend/app/routers/auth.py
from fastapi import APIRouter, HTTPException,Depends
from app.schemas.auth import LoginRequest, LoginResponse, UserBase, RegisterRequest, RegisterResponse
from app.services.auth_service import authenticate_user,register_user
from app.schemas.general import ErrorResponse
from typing import Union
from app.core.jwt_handler import verify_refresh_token, verify_token, create_access_token
from app.core.logging import logger

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/login", response_model=LoginResponse)
def login_user(login: LoginRequest):
    try:
        user, role, extra ,token= authenticate_user(login.username, login.password)

        return LoginResponse(
            message="Login successful",
            role=role,
            user=UserBase(id=user["id"], username=user["username"], role=role),
            details=extra,
            token=token
        )
    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        raise HTTPException(status_code=500, detail="Something went wrong. Please try again later.")
    
@router.post("/register", response_model=Union[RegisterResponse, ErrorResponse])
def registeruser(register: RegisterRequest):
    try:
        return register_user(register)
    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        raise HTTPException(status_code=500, detail="Something went wrong during registration. Please try again later.") 


# 🔄 Refresh Token
@router.post("/refresh")
def refresh_token(refresh_token: dict):
    logger.info("Refreshing access token-{}".format(refresh_token))
    refresh_token = refresh_token.get("refresh_token")
    if not refresh_token:
        raise HTTPException(status_code=400, detail="Missing refresh token")

    payload = verify_refresh_token(refresh_token)

    logger.info("verify_token -{}".format(payload))


    user_id = payload.get("user_id")
    role = payload.get("role")

    # generate a new access token
    new_access_token = create_access_token({"user_id": user_id, "role": role})
    return {
        "access_token": new_access_token,
        "token_type": "bearer"
    }


# 👤 Get current user info
@router.get("/me")
def get_current_user(payload: dict = Depends(verify_token)):
    """
    Returns current logged-in user info based on JWT token.
    """
    return {
        "user_id": payload.get("user_id"),
        "role": payload.get("role"),
        "message": "Token verified successfully"
    }
