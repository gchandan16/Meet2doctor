from pydantic import BaseModel
from typing import Optional, List
from datetime import date

class PatientBase(BaseModel):
    user_id: int
    age: int
    gender: str
    blood_group: Optional[str] = None
    medical_history: Optional[str] = None
    contact_number: Optional[str] = None
    address: Optional[str] = None
    first_name: str
    last_name: str
    date_of_birth: Optional[date] = None


class PatientCreate(PatientBase):
    pass


class PatientUpdate(BaseModel):
    age: Optional[int] = None
    gender: Optional[str] = None
    blood_group: Optional[str] = None
    medical_history: Optional[str] = None
    contact_number: Optional[str] = None
    address: Optional[str] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    date_of_birth: Optional[date] = None


class PatientOut(PatientBase):
    patient_id: int

    class Config:
        orm_mode = True
