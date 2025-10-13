from app.repositories.patient_repository import PatientRepository
from app.core.logging import logger

class PatientService:
    @staticmethod
    def register_patient(data):
        return PatientRepository.register_patient(data)

    @staticmethod
    def get_all_patients():
        logger.info("get patient data in service layers")
        return PatientRepository.get_all_patients()

    @staticmethod
    def get_patient_by_id(patient_id):
        return PatientRepository.get_patient_by_id(patient_id)

    @staticmethod
    def update_patient(patient_id, data):
        return PatientRepository.update_patient(patient_id, data)

    @staticmethod
    def delete_patient(patient_id):
        return PatientRepository.delete_patient(patient_id)

    @staticmethod
    def get_patient_appointments(patient_id):
        return PatientRepository.get_appointments_for_patient(patient_id)

    @staticmethod
    def get_patient_feedbacks(patient_id):
        return PatientRepository.get_feedbacks_by_patient(patient_id)
