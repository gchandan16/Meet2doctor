# app/schemas/feedback_schema.py
from pydantic import BaseModel, conint, constr
from typing import Optional
from datetime import datetime

# -------------------------
# Request Schemas
# -------------------------
class FeedbackCreate(BaseModel):
    patient_id: int
    doctor_id: int
    rating: conint(ge=1, le=5)
    comments: Optional[constr(strip_whitespace=True, max_length=500)] = None


# -------------------------
# Response Schemas
# -------------------------
class FeedbackOut(BaseModel):
    id: int
    patient_id: int
    doctor_id: int
    rating: int
    comments: Optional[str]
    created_at: datetime

    class Config:
        orm_mode = True
