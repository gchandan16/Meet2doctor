from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


class DoctorRegisterRequest(BaseModel):
    username: str
    email: EmailStr
    password: str
    specialization: str = "General"
    experience_years: int = 0

class DoctorUpdateRequest(BaseModel):
    specialization: Optional[str]
    experience_years: Optional[int]
    first_name: Optional[str]
    last_name: Optional[str]
    qualification: Optional[str]
    registration_number: Optional[str]
    contact_number: Optional[str]
    profile_picture: Optional[str]

class DoctorOut(BaseModel):
    doctor_id: int
    user_id: int
    specialization: Optional[str]
    experience_years: Optional[int]
    first_name: Optional[str]
    last_name: Optional[str]
    qualification: Optional[str]
    registration_number: Optional[str]
    profile_picture: Optional[str]
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
