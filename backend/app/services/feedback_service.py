# app/services/feedback_service.py
from app.repositories.feedback_repository import FeedbackRepository
from app.schemas.feedback_schema import FeedbackCreate
from app.core.logging import logger

class FeedbackService:
    """Business logic layer for Feedback"""

    @staticmethod
    def add_feedback(feedback_data: FeedbackCreate):
        return FeedbackRepository.add_feedback(feedback_data)

    @staticmethod
    def get_all_feedback():
        return FeedbackRepository.get_all_feedback()

    @staticmethod
    def get_feedbacks_for_doctor(doctor_id: int):
        return FeedbackRepository.get_feedbacks_for_doctor(doctor_id)

    @staticmethod
    def get_feedbacks_by_patient(patient_id: int):
        logger.info(f"calling routes feedback by patientid {patient_id}")
        return FeedbackRepository.get_feedbacks_by_patient(patient_id)

    @staticmethod
    def delete_feedback(feedback_id: int):
        return FeedbackRepository.delete_feedback(feedback_id)
