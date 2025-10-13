from app.repositories.hospital_repository import HospitalRepository
from app.core.logging import logger

class HospitalService:

    @staticmethod
    def create_hospital(data):
        return HospitalRepository.add_hospital(data)

    @staticmethod
    def get_hospital(hospital_id: int):
        return HospitalRepository.get_hospital_by_id(hospital_id)

    @staticmethod
    def list_all_hospitals():
        logger.info("list_all_hospitals is processed of Service layer")
        getresult=HospitalRepository.list_hospitals()
        logger.info("list_all_hospitals of this method is: {getresult}")
        return getresult

    @staticmethod
    def update_hospital(hospital_id: int, data):
        return HospitalRepository.update_hospital(hospital_id, data)

    @staticmethod
    def delete_hospital(hospital_id: int):
        return HospitalRepository.delete_hospital(hospital_id)
