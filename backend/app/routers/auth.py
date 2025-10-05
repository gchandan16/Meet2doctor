# backend/app/routers/auth.py
from fastapi import APIRouter, HTTPException
from app.schemas.auth import LoginRequest, LoginResponse, UserBase, RegisterRequest, RegisterResponse
from app.services.auth_service import authenticate_user,register_user
from app.schemas.general import ErrorResponse
from typing import Union

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/login", response_model=LoginResponse)
def login_user(login: LoginRequest):
    try:
        user, role, extra = authenticate_user(login.username, login.password)

        return LoginResponse(
            message="Login successful",
            role=role,
            user=UserBase(id=user["id"], username=user["username"], role=role),
            details=extra
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
