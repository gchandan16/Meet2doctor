from pydantic import BaseModel
from typing import Optional
from datetime import date, datetime

# -------------------------
# Request Schemas
# -------------------------
class DoctorHospitalAssign(BaseModel):
    doctor_id: int
    hospital_id: int
    joining_date: Optional[date] = None  # Optional (defaults to current date in SP)


# -------------------------
# Response Schemas
# -------------------------
class DoctorHospitalOut(BaseModel):
    id: int
    doctor_id: int
    hospital_id: int
    joining_date: Optional[date] = None
    created_at: Optional[datetime] = None


class DoctorHospitalDataOut(BaseModel):
    doctor_id: int
    user_id: int	
    specialization: Optional[str]	
    experience_years	:int	
    contact_number	: Optional[str]	
    first_name	: Optional[str]	
    last_name	: Optional[str]	
    qualification	: Optional[str]	
    registration_number	: Optional[str]	
    profile_picture	: Optional[str]	
    created_at	: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
