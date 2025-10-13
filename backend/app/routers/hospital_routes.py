from fastapi import APIRouter, Depends, HTTPException
from app.schemas.hospital_schema import HospitalCreate, HospitalUpdate, HospitalOut
from app.services.hospital_service import HospitalService
from typing import List
from app.core.jwt_handler import verify_token
from app.core.logging import logger

router = APIRouter(prefix="/hospital", tags=["Hospital"])

@router.post("/", response_model=dict)
def create_hospital(request: HospitalCreate, auth=Depends(verify_token)):
    result = HospitalService.create_hospital(request)
    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["message"])
    return result

@router.get("/{hospital_id}", response_model=HospitalOut)
def get_hospital(hospital_id: int, auth=Depends(verify_token)):
    hospital = HospitalService.get_hospital(hospital_id)
    if not hospital:
        raise HTTPException(status_code=404, detail="Hospital not found")
    return hospital

@router.get("/", response_model=List[HospitalOut])
def list_hospitals(auth=Depends(verify_token)):
    logger.info(f"list_hospitals is processed with token {verify_token}")
    return HospitalService.list_all_hospitals()

@router.put("/{hospital_id}", response_model=dict)
def update_hospital(hospital_id: int, request: HospitalUpdate, auth=Depends(verify_token)):
    result = HospitalService.update_hospital(hospital_id, request)
    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["message"])
    return result

@router.delete("/{hospital_id}", response_model=dict)
def delete_hospital(hospital_id: int, auth=Depends(verify_token)):
    result = HospitalService.delete_hospital(hospital_id)
    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["message"])
    return result
