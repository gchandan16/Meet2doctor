from app.core.database import get_connection
from app.core.logging import logger
from typing import Any, Dict, List

class HospitalRepository:

    @staticmethod
    def add_hospital(data):
        conn = get_connection()
        cursor = conn.cursor()
        try:
            args = [
                data.name, data.email, data.phone, data.address, data.city, data.state,
                0, ""  # OUT params
            ]
            result = cursor.callproc('sp_add_hospital', args)
            conn.commit()
            return {"success": bool(result[6]), "message": result[7]}
        except Exception as e:
            conn.rollback()
            logger.error(f"Error in add_hospital: {e}")
            return {"success": False, "message": str(e)}
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def get_hospital_by_id(hospital_id: int):
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            cursor.callproc('sp_get_hospital_by_id', [hospital_id])
            for result in cursor.stored_results():
                return result.fetchone()
        except Exception as e:
            logger.error(f"Error in get_hospital_by_id: {e}")
            return None
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def list_hospitals():
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            logger.info(f"list_hospitals is processed of repository layer")
            cursor.callproc('sp_list_hospitals')
            for result in cursor.stored_results():
                return result.fetchall()
        except Exception as e:
            logger.error(f"Error in list_hospitals: {e}")
            return []
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def update_hospital(hospital_id: int, data):
        conn = get_connection()
        cursor = conn.cursor()
        try:
            args = [
                hospital_id, data.name, data.email, data.phone, data.address, data.city, data.state,
                0, ""
            ]
            result = cursor.callproc('sp_update_hospital', args)
            conn.commit()
            return {"success": bool(result[7]), "message": result[8]}
        except Exception as e:
            conn.rollback()
            logger.error(f"Error in update_hospital: {e}")
            return {"success": False, "message": str(e)}
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def delete_hospital(hospital_id: int):
        conn = get_connection()
        cursor = conn.cursor()
        try:
            args = [hospital_id, 0, ""]
            result = cursor.callproc('sp_delete_hospital', args)
            conn.commit()
            return {"success": bool(result[1]), "message": result[2]}
        except Exception as e:
            conn.rollback()
            logger.error(f"Error in delete_hospital: {e}")
            return {"success": False, "message": str(e)}
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def search_hospitals(self, keyword: str) -> List[Dict[str, Any]]:
        """
        CALL sp_search_hospitals(IN p_keyword VARCHAR(100))
        SP should search in hospital/clinic name, city, area.
        """
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            args = [keyword]
            cursor.callproc("sp_search_hospitals", args)
            for result in cursor.stored_results():
                rows = result.fetchall()
                return rows
        except Exception as e:
            logger.error(f"SP search_hospitals error: {e}")
            return []
        finally:
            cursor.close()
            conn.close()