from app.repositories.doctor_hospital_repository import DoctorHospitalRepository
from app.core.logging import logger


class DoctorHospitalService:

    @staticmethod
    def assign_doctor_to_hospital(data):
        return DoctorHospitalRepository.assign_doctor_to_hospital(data)

    @staticmethod
    def get_all_assignments():
        return DoctorHospitalRepository.get_all_assignments()

    @staticmethod
    def get_hospital_by_doctor(doctor_id: int):
        return DoctorHospitalRepository.get_hospital_by_doctor(doctor_id)

    @staticmethod
    def get_doctors_by_hospital(hospital_id: int):
        logger.info(f"Get all doctors assigned to a hospital in service-{hospital_id}")
        return DoctorHospitalRepository.get_doctors_by_hospital(hospital_id)

    @staticmethod
    def remove_assignment(id: int):
        return DoctorHospitalRepository.remove_assignment(id)
