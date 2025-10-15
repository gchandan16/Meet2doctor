from pydantic import BaseModel
from datetime import date, time, datetime
from typing import Optional

class AppointmentBase(BaseModel):
    doctor_id: int
    hospital_id: int
    patient_id: int
    appointment_date: date
    start_time: time
    end_time: time
    status: Optional[str] = "Pending"

class AppointmentCreate(AppointmentBase):
    pass

class AppointmentUpdateStatus(BaseModel):
    status: str

class AppointmentOut(AppointmentBase):
    appointment_id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
