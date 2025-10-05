from pydantic import BaseModel
from typing import Optional, Dict, Any

class LoginRequest(BaseModel):
    username: str
    password: str

class UserBase(BaseModel):
    id: int
    username: str
    role: str

class LoginResponse(BaseModel):
    message: str
    role: str
    user: UserBase
    details: Optional[Dict[str, Any]] = None
    token: Optional[str] = None


# Create a user registration
# backend/app/schemas/user_schema.py
from pydantic import BaseModel, EmailStr,constr
from typing import Optional

class RegisterRequest(BaseModel):
    username: constr(min_length=3, max_length=50)
    email: EmailStr
    password_hash: constr(min_length=6)
    role: str # e.g., 'patient', 'doctor'

class RegisterResponse(BaseModel):
    message: str
    user_id: int
    username: str
    role: str
    details: Optional[dict] = None
