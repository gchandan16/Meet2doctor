from abc import ABC, abstractmethod
from typing import Any, Dict, Optional, List


class IDoctorRepository(ABC):
    @abstractmethod
    def get_doctor_by_id(self, doctor_id: int) -> Optional[Dict[str, Any]]:
        """Fetch doctor profile by doctor_id"""
        pass

    @abstractmethod
    def update_doctor_profile(self, doctor_id: int, specialization: str,
                              experience_years: int) -> Dict[str, Any]:
        """Update doctor specialization or experience"""
        pass

    @abstractmethod
    def list_all_doctors(self) -> List[Dict[str, Any]]:
        """Get all doctor profiles"""
        pass
