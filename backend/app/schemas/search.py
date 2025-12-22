from typing import List
from pydantic import BaseModel
from .doctor import DoctorSearchOut
from .hospital import HospitalSearchOut

class SearchAllOut(BaseModel):
    doctors: List[DoctorSearchOut]
    hospitals: List[HospitalSearchOut]