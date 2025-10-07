from fastapi import APIRouter, Depends, HTTPException
from typing import List
from app.schemas.doctor_schema import DoctorRegisterRequest, DoctorOut, DoctorUpdateRequest
from app.services.doctor_service import DoctorService
from app.core.jwt_handler import verify_token
from app.core.logging import logger
from app.schemas.general import ErrorResponse   
from typing import Union

router = APIRouter(prefix="/doctors", tags=["Doctors"])
service = DoctorService()


@router.get("/me", response_model=Union[DoctorOut, ErrorResponse])
def get_my_profile(auth=Depends(verify_token)):
    logger.info(f"Fetching profile for user_id: {auth['user_id']} && role: {auth['role']} && pdid: {auth['pdid']}")
    doctor = service.get_doctor_profile(auth["pdid"])
    logger.info(f"Service response profile details: {doctor}")
    if not doctor:
        return ErrorResponse(success=False, status=404, message="Doctor not found")
    return doctor


@router.put("/update", response_model=dict)
def update_profile(payload: DoctorUpdateRequest, auth=Depends(verify_token)):
    logger.info(f"the comming payload in update_profile: {payload}")
    if auth["role"] != "doctor":
        raise HTTPException(status_code=403, detail="Access denied")
    result = service.update_doctor_profile(auth["pdid"], payload)
    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["message"])
    return result


@router.get("/list", response_model=List[DoctorOut])
def list_all_doctors(auth=Depends(verify_token)):
    if auth["role"] not in ["admin", "staff"]:
        raise HTTPException(status_code=403, detail="Access denied")
    return service.list_doctors()
