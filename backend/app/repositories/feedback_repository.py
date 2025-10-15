# app/repositories/feedback_repository.py
from app.core.database import get_connection
from app.core.logging import logger

class FeedbackRepository:
    """Repository layer for Feedback using Stored Procedures"""

    # -----------------------------
    # Add Feedback
    # -----------------------------
    @staticmethod
    def add_feedback(data):
        conn = get_connection()
        cursor = conn.cursor()
        try:
            args = [
                data.patient_id,
                data.doctor_id,
                data.rating,
                data.comments
            ]
            logger.info(f"feedback repository is calling:{data} ")
            result = cursor.callproc('sp_add_feedback', args)
            conn.commit()
            return {"success": True, "message": "Feedback added successfully"}
        except Exception as e:
            conn.rollback()
            logger.error(f"Error in add_feedback: {e}")
            return {"success": False, "message": str(e)}
        finally:
            cursor.close()
            conn.close()

    # -----------------------------
    # Get All Feedback
    # -----------------------------
    @staticmethod
    def get_all_feedback():
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            cursor.callproc('sp_get_all_feedback')
            for result in cursor.stored_results():
                return result.fetchall()
        except Exception as e:
            logger.error(f"Error in get_all_feedback: {e}")
            return []
        finally:
            cursor.close()
            conn.close()

    # -----------------------------
    # Get Feedbacks for Doctor
    # -----------------------------
    @staticmethod
    def get_feedbacks_for_doctor(doctor_id: int):
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            cursor.callproc('sp_get_feedbacks_for_doctor', [doctor_id])
            for result in cursor.stored_results():
                return result.fetchall()
        except Exception as e:
            logger.error(f"Error in get_feedbacks_for_doctor: {e}")
            return []
        finally:
            cursor.close()
            conn.close()

    # -----------------------------
    # Get Feedbacks by Patient
    # -----------------------------
    @staticmethod
    def get_feedbacks_by_patient(patient_id: int):
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            logger.info(f"calling repository feedback by patientid {patient_id}")
            cursor.callproc('sp_get_feedbacks_by_patient', [patient_id])
            for result in cursor.stored_results():
                return result.fetchall()
        except Exception as e:
            logger.error(f"Error in get_feedbacks_by_patient: {e}")
            return []
        finally:
            cursor.close()
            conn.close()

    # -----------------------------
    # Delete Feedback
    # -----------------------------
    @staticmethod
    def delete_feedback(feedback_id: int):
        conn = get_connection()
        cursor = conn.cursor()
        try:
            args = [feedback_id]
            result = cursor.callproc('sp_delete_feedback', args)
            conn.commit()
            return {"success": True, "message": "Feedback deleted successfully"}
        except Exception as e:
            conn.rollback()
            logger.error(f"Error in delete_feedback: {e}")
            return {"success": False, "message": str(e)}
        finally:
            cursor.close()
            conn.close()
