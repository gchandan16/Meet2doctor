from app.repositories.hospital_repository import HospitalRepository
from app.repositories.doctor_repository import DoctorRepository
from app.core.logging import logger

class SearchService:
    @staticmethod
    def search_all(keyword: str):
        logger.info(f"Searching for keyword: {keyword}")
        doctors = DoctorRepository().search_doctors(keyword)
        hospitals = HospitalRepository().search_hospitals(keyword)
        return {
            "doctors": doctors,
            "hospitals": hospitals
        }
    @staticmethod
    def search_doctors(keyword: str,page:int,page_size:int,sort_by:str):
        logger.info(f"Searching doctors for keyword & page with page size: {keyword}-{page}-{page_size}-{sort_by}")
        return DoctorRepository().search_doctors(keyword,page,page_size,sort_by)

    @staticmethod
    def search_hospitals(keyword: str): 
        logger.info(f"Searching hospitals for keyword: {keyword}")
        return HospitalRepository().search_hospitals(keyword) 
