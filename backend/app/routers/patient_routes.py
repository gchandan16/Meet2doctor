from fastapi import APIRouter, Depends, HTTPException
from app.schemas.patient_schema import PatientCreate, PatientUpdate
from app.services.patient_service import PatientService
from app.core.jwt_handler import verify_token
from app.core.logging import logger

router = APIRouter(prefix="/patients", tags=["Patients"])

@router.post("/register")
def register_patient(data: PatientCreate, user=Depends(verify_token)):
    return PatientService.register_patient(data)

@router.get("/")
def get_all_patients(user=Depends(verify_token)):
    logger.info(f"fetching all patient list")
    return PatientService.get_all_patients()

@router.get("/{patient_id}")
def get_patient_by_id(patient_id: int, user=Depends(verify_token)):
    result = PatientService.get_patient_by_id(patient_id)
    if not result:
        raise HTTPException(status_code=404, detail="Patient not found")
    return result

@router.put("/{patient_id}")
def update_patient(patient_id: int, data: PatientUpdate, user=Depends(verify_token)):
    return PatientService.update_patient(patient_id, data)

@router.delete("/{patient_id}")
def delete_patient(patient_id: int, user=Depends(verify_token)):
    return PatientService.delete_patient(patient_id)

@router.get("/{patient_id}/appointments")
def get_patient_appointments(patient_id: int, user=Depends(verify_token)):
    return PatientService.get_patient_appointments(patient_id)

@router.get("/{patient_id}/feedbacks")
def get_patient_feedbacks(patient_id: int, user=Depends(verify_token)):
    return PatientService.get_patient_feedbacks(patient_id)
