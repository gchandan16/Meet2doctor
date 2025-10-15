from app.repositories.appointment_repository import AppointmentRepository
from app.core.logging import logger

class AppointmentService:

    @staticmethod
    def create_appointment(data: dict):
        return AppointmentRepository.create_appointment(data)

    @staticmethod
    def get_all():
        return AppointmentRepository.get_all_appointments()

    @staticmethod
    def get_by_id(appointment_id: int):
        return AppointmentRepository.get_appointment_by_id(appointment_id)

    @staticmethod
    def update_status(appointment_id: int, status: str):
        logger.info(f"the data comming in service layer status : {status}  & id :{appointment_id}")
        return AppointmentRepository.update_status(appointment_id, status)

    @staticmethod
    def delete(appointment_id: int):
        return AppointmentRepository.delete_appointment(appointment_id)

    @staticmethod
    def get_by_doctor(doctor_id: int):
        return AppointmentRepository.get_appointments_by_doctor(doctor_id)
