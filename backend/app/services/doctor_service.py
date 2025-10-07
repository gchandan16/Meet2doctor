from app.repositories.doctor_repository import DoctorRepository
from app.core.logging import logger
from app.schemas.doctor_schema import DoctorUpdateRequest


class DoctorService:
    def __init__(self):
        self.repo = DoctorRepository()
    def get_doctor_profile(self, doctor_id: int):
        logger.info(f"Fetching profile for doctor_id: {doctor_id}")
        doctorDetails=self.repo.get_doctor_by_id(doctor_id)
        logger.info(f"Fetched profile details: {doctorDetails}")
        return doctorDetails

    def update_doctor_profile(self, doctor_id: int, payload: DoctorUpdateRequest):
        logger.info(f"Updating profile in service for doctor_id: {doctor_id}  & payload is {payload}")
        return self.repo.update_doctor_profile(doctor_id, payload)

    def list_doctors(self):
        logger.info("Listing all doctors")
        return self.repo.list_all_doctors()
