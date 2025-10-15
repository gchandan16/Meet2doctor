from fastapi import APIRouter, Depends
from app.schemas.doctor_hospital_schema import DoctorHospitalAssign, DoctorHospitalOut,DoctorHospitalDataOut
from app.schemas.hospital_schema import HospitalBase,HospitalOut
from app.services.doctor_hospital_service import DoctorHospitalService
from app.core.jwt_handler import verify_token  # ✅ JWT security
from app.core.logging import logger

router = APIRouter(prefix="/doctorhospital", tags=["Doctor-Hospital"])


@router.post("", response_model=dict)
def assign_doctor_to_hospital(data: DoctorHospitalAssign, current_user: dict = Depends(verify_token)):
    """Assign a doctor to a hospital"""
    return DoctorHospitalService.assign_doctor_to_hospital(data)


@router.get("", response_model=list[DoctorHospitalOut])
def get_all_assignments(current_user: dict = Depends(verify_token)):
    logger.info(f"fetching routes doctor -hspital")
    """Get all doctor-hospital assignments"""
    return DoctorHospitalService.get_all_assignments()


@router.get("/doctor/{doctor_id}", response_model=HospitalOut)
def get_hospital_by_doctor(doctor_id: int, current_user: dict = Depends(verify_token)):
    """Get hospital assigned to a doctor"""
    return DoctorHospitalService.get_hospital_by_doctor(doctor_id)


@router.get("/hospital/{hospital_id}", response_model=list[DoctorHospitalDataOut])
def get_doctors_by_hospital(hospital_id: int, current_user: dict = Depends(verify_token)):
    logger.info(f"Get all doctors assigned to a hospital")
    return DoctorHospitalService.get_doctors_by_hospital(hospital_id)


@router.delete("/{id}", response_model=dict)
def remove_assignment(id: int, current_user: dict = Depends(verify_token)):
    """Remove a doctor-hospital assignment"""
    return DoctorHospitalService.remove_assignment(id)
