#General Error Response
from pydantic import BaseModel, EmailStr,constr
from typing import Optional, Dict, Any

class ErrorResponse(BaseModel): 
    success: bool
    status: int
    message: str