from app.core.database import get_connection
from app.core.logging import logger

class AppointmentRepository:

    @staticmethod
    def create_appointment(data: dict):
        conn = get_connection()
        cursor = conn.cursor()
        try:
            args = [
                data["doctor_id"], data["hospital_id"], data["patient_id"],
                data["appointment_date"], data["start_time"], data["end_time"],
                0, 0, ""
            ]
            result = cursor.callproc("sp_create_appointment", args)
            conn.commit()
            return {
                "success": bool(result[7]),
                "appointment_id": result[6],
                "message": result[8]
            }
        except Exception as e:
            conn.rollback()
            logger.error(f"Error in create_appointment: {e}")
            return {"success": False, "message": str(e)}
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def get_all_appointments():
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.callproc("sp_get_all_appointments")
        for res in cursor.stored_results():
            return res.fetchall()

    @staticmethod
    def get_appointment_by_id(appointment_id: int):
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.callproc("sp_get_appointment_by_id", [appointment_id])
        for res in cursor.stored_results():
            return res.fetchone()

    @staticmethod
    def update_status(appointment_id: int, status: str):
        conn = get_connection()
        cursor = conn.cursor()
        args = [appointment_id, status, 0, ""]
        result = cursor.callproc("sp_update_appointment_status", args)
        conn.commit()
        return {"success": bool(result[2]), "message": result[3]}

    @staticmethod
    def delete_appointment(appointment_id: int):
        conn = get_connection()
        cursor = conn.cursor()
        args = [appointment_id, 0, ""]
        result = cursor.callproc("sp_delete_appointment", args)
        conn.commit()
        return {"success": bool(result[1]), "message": result[2]}

    @staticmethod
    def get_appointments_by_doctor(doctor_id: int):
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.callproc("sp_get_appointments_by_doctor", [doctor_id])
        for res in cursor.stored_results():
            return res.fetchall()
