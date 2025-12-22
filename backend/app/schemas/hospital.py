from pydantic import BaseModel
from typing import Optional

class HospitalSearchOut(BaseModel):
    hospital_id: int
    name: str
    city: Optional[str] = None
    area: Optional[str] = None
    contact_number: Optional[str] = None