from fastapi import APIRouter, Depends, HTTPException
from app.schemas.appointment_schema import AppointmentCreate, AppointmentUpdateStatus
from app.services.appointment_service import AppointmentService
from app.core.jwt_handler import verify_token
from app.core.logging import logger

router = APIRouter(prefix="/appointments", tags=["Appointments"])

@router.post("/")
def create_appointment(data: AppointmentCreate, token_data=Depends(verify_token)):
    result = AppointmentService.create_appointment(data.dict())
    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["message"])
    return result

@router.get("/")
def get_all_appointments(token_data=Depends(verify_token)):
    return AppointmentService.get_all()

@router.get("/{appointment_id}")
def get_appointment_by_id(appointment_id: int, token_data=Depends(verify_token)):
    result = AppointmentService.get_by_id(appointment_id)
    if not result:
        raise HTTPException(status_code=404, detail="Appointment not found")
    return result

@router.put("/{appointment_id}/status")
def update_status(appointment_id: int, data: AppointmentUpdateStatus, token_data=Depends(verify_token)):
    logger.info(f"the comming routes data is  {data}")
    result = AppointmentService.update_status(appointment_id, data.status)
    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["message"])
    return result

@router.delete("/{appointment_id}")
def delete_appointment(appointment_id: int, token_data=Depends(verify_token)):
    result = AppointmentService.delete(appointment_id)
    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["message"])
    return result

@router.get("/doctor/{doctor_id}")
def get_appointments_by_doctor(doctor_id: int, token_data=Depends(verify_token)):
    return AppointmentService.get_by_doctor(doctor_id)
