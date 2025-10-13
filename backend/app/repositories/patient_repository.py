from app.core.database import get_connection
from app.core.logging import logger

class PatientRepository:

    @staticmethod
    def register_patient(data):
        conn = get_connection()
        cursor = conn.cursor()
        try:
            args = [
                data.user_id, data.age, data.gender, data.blood_group,
                data.medical_history, data.contact_number, data.address,
                data.first_name, data.last_name, data.date_of_birth,
                0, 0, ""
            ]
            result = cursor.callproc('sp_register_patient', args)
            patient_id = result[10]
            success = result[11]
            message = result[12]
            conn.commit()
            return {"success": bool(success), "patient_id": patient_id, "message": message}
        except Exception as e:
            conn.rollback()
            logger.error(f"Register Patient Error: {e}")
            return {"success": False, "message": str(e)}
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def get_all_patients():
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            cursor.callproc('sp_get_all_patients')
            for result in cursor.stored_results():
                return result.fetchall()
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def get_patient_by_id(patient_id: int):
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            cursor.callproc('sp_get_patient_by_id', [patient_id])
            for result in cursor.stored_results():
                return result.fetchone()
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def update_patient(patient_id: int, data):
        conn = get_connection()
        cursor = conn.cursor()
        try:
            args = [
                patient_id, data.age, data.gender, data.blood_group,
                data.medical_history, data.contact_number, data.address,
                data.first_name, data.last_name, data.date_of_birth,
                0, ""
            ]
            result = cursor.callproc('sp_update_patient', args)
            success = result[10]
            message = result[11]
            conn.commit()
            return {"success": bool(success), "message": message}
        except Exception as e:
            conn.rollback()
            return {"success": False, "message": str(e)}
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def delete_patient(patient_id: int):
        conn = get_connection()
        cursor = conn.cursor()
        try:
            args = [patient_id, 0, ""]
            result = cursor.callproc('sp_delete_patient', args)
            success = result[1]
            message = result[2]
            conn.commit()
            return {"success": bool(success), "message": message}
        except Exception as e:
            conn.rollback()
            return {"success": False, "message": str(e)}
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def get_appointments_for_patient(patient_id: int):
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            cursor.callproc('sp_get_appointments_for_patient', [patient_id])
            for result in cursor.stored_results():
                return result.fetchall()
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def get_feedbacks_by_patient(patient_id: int):
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            cursor.callproc('sp_get_feedbacks_by_patient', [patient_id])
            for result in cursor.stored_results():
                return result.fetchall()
        finally:
            cursor.close()
            conn.close()
