from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class HospitalBase(BaseModel):
    name: str
    email: Optional[EmailStr]
    phone: Optional[str]
    address: Optional[str]
    city: Optional[str]
    state: Optional[str]

class HospitalCreate(HospitalBase):
    pass

class HospitalUpdate(HospitalBase):
    pass

class HospitalOut(HospitalBase):
    hospital_id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
