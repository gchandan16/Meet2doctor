from typing import Any, Dict, Optional, List
from app.repositories.interfaces.i_doctor_repository import IDoctorRepository
from app.core.database import get_connection
from app.core.logging import logger
from app.schemas.doctor_schema import DoctorUpdateRequest


class DoctorRepository(IDoctorRepository):
    def get_doctor_by_id(self, doctor_id: int) -> Optional[Dict[str, Any]]:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            cursor.callproc("sp_get_doctor_by_id", [doctor_id])
            for result in cursor.stored_results():
                doctor = result.fetchone()
                return doctor
        except Exception as e:
            logger.error(f"SP get_doctor_by_id error: {e}")
            return None
        finally:
            cursor.close()
            conn.close()

    def update_doctor_profile(self, doctor_id: int, payload: DoctorUpdateRequest) -> Dict[str, Any]:
        conn = get_connection()
        cursor = conn.cursor()
        try:
            args = [doctor_id,  payload.specialization,payload.contact_number, payload.experience_years, payload.first_name,payload.last_name,payload.qualification,payload.registration_number,payload.profile_picture,0,""]
            logger.info(f"the payload in doctor repository is {payload}")
            result = cursor.callproc("sp_update_doctor_profile", args)
            success = result[9]
            message = result[10]

            conn.commit()
            logger.info(f"Doctor updated: {message}")
            return {"success": bool(success), "message": message}
        except Exception as e:
            conn.rollback()
            logger.error(f"SP update_doctor_profile error: {e}")
            return {"success": False, "message": str(e)}
        finally:
            cursor.close()
            conn.close()

    def list_all_doctors(self) -> List[Dict[str, Any]]:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            cursor.callproc("sp_list_all_doctors")
            for result in cursor.stored_results():
                rows = result.fetchall()
                return rows
        except Exception as e:
            logger.error(f"SP list_all_doctors error: {e}")
            return []
        finally:
            cursor.close()
            conn.close()
    
    def search_doctors(
            self,
            query: str,
            page: int,
            page_size: int,
            sort_by: str
            ) -> List[Dict[str, Any]]:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            cursor.callproc("sp_search_doctors", [query,page,page_size,sort_by])
            results = []
            for result in cursor.stored_results():
             results.append(result.fetchall())

            return {
                "data": results[0],                      # doctors list
                "totalRecords": results[1][0]["totalRecords"],
                "page": page,
                "pageSize": page_size
            }
        except Exception as e:
            logger.error(f"SP search_doctors error: {e}")
            return {
            "data": [],
            "totalRecords": 0,
            "page": page,
            "pageSize": page_size
        }
        finally:
            cursor.close()
            conn.close()
