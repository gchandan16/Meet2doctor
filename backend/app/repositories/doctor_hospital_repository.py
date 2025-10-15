from app.core.database import get_connection
from app.core.logging import logger


class DoctorHospitalRepository:

    @staticmethod
    def assign_doctor_to_hospital(data):
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            args = [data.doctor_id, data.hospital_id, data.joining_date]
            cursor.callproc("sp_assign_doctor_to_hospital", args)
            conn.commit()

            for result in cursor.stored_results():
                return result.fetchone()

            return {"success": True, "message": "Doctor assigned successfully"}
        except Exception as e:
            conn.rollback()
            logger.error(f"Error in assign_doctor_to_hospital: {e}")
            return {"success": False, "message": str(e)}
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def get_all_assignments():
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            cursor.callproc("sp_get_all_doctorhospital")
            for result in cursor.stored_results():
                return result.fetchall()
        except Exception as e:
            logger.error(f"Error in get_all_assignments: {e}")
            return []
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def get_hospital_by_doctor(doctor_id: int):
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            cursor.callproc("sp_get_hospital_by_doctor", [doctor_id])
            for result in cursor.stored_results():
                return result.fetchone()
        except Exception as e:
            logger.error(f"Error in get_hospital_by_doctor: {e}")
            return None
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def get_doctors_by_hospital(hospital_id: int):
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            logger.info(f"Get all doctors assigned to a hospital in repository-{hospital_id}")
            cursor.callproc("sp_get_doctors_by_hospital", [hospital_id])
            for result in cursor.stored_results():
                return result.fetchall()
        except Exception as e:
            logger.error(f"Error in get_doctors_by_hospital: {e}")
            return []
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def remove_assignment(id: int):
        conn = get_connection()
        cursor = conn.cursor()
        try:
            cursor.callproc("sp_remove_doctor_from_hospital", [id])
            conn.commit()
            return {"success": True, "message": "Doctor-hospital assignment removed"}
        except Exception as e:
            conn.rollback()
            logger.error(f"Error in remove_assignment: {e}")
            return {"success": False, "message": str(e)}
        finally:
            cursor.close()
            conn.close()
