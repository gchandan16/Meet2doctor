from pydantic import BaseModel
from typing import Optional

class DoctorSearchOut(BaseModel):
    doctor_id: int
    first_name: str
    last_name: str
    specialization: Optional[str] = None
    experience_years: Optional[int] = None
    contact_number: Optional[str] = None
    hospital_name: Optional[str] = None