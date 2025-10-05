# Responsible for bussiness logic related to authentication
from fastapi import HTTPException
from passlib.hash import bcrypt
from app.core.logging import logger
from app.repositories.user_repository import get_user_by_username, get_doctor_details, get_patient_details, registeruser, registerdoctor,registerpatient
from app.schemas.auth import RegisterRequest, RegisterResponse
from app.schemas.general import ErrorResponse


def authenticate_user(username: str, password: str):
        try:
            user = get_user_by_username(username)

            if not user:
                logger.warning(f"User '{username}' not found")
                raise HTTPException(status_code=401, detail="Invalid username or password")
            else:
                logger.info(f"User '{username}' found in database")

        
            if user["password_hash"] != password:
                logger.warning(f"Wrong password for user '{username}'")
                raise HTTPException(status_code=401, detail="Invalid username or password")
            else:
                logger.info(f"Password verified for user '{username}'")

            role = user["role"]
            extra = None
            if role == "doctor":
                extra = get_doctor_details(user["id"])
            elif role == "patient":
                extra = get_patient_details(user["id"])

            logger.info(f"User '{username}' authenticated successfully as {role}")
            return user, role, extra
        except HTTPException as http_exc:
            raise http_exc
        except Exception as e:
            logger.error(f"Error during authentication for user '{username}': {e}")
            raise HTTPException(status_code=500, detail="Something went wrong. Please try again later.")
        

def register_user(register: RegisterRequest)-> RegisterResponse:        
   try:
       #Hash the password
        #password_hash = bcrypt.hash(register.password_hash)
        password_hash = register.password_hash
        # Using stored procedure to register doctor
        if register.role == "doctor":
            sp_result = registerdoctor(register.username, register.email, password_hash, register.role)
            if not sp_result["success"]:
                logger.error(f"Failed to register doctor '{register.username}': {sp_result['message']}")
                return ErrorResponse(success=False, status=401, message=sp_result["message"])
            user_id = sp_result["user_id"]
        elif register.role == "patient":
            sp_result = registerpatient(register.username, register.email, password_hash, register.role)
            if not sp_result["success"]:
                logger.error(f"Failed to register patient '{register.username}': {sp_result['message']}")
                return ErrorResponse(success=False, status=401, message=sp_result["message"])
            user_id = sp_result["user_id"]
        elif register.role == "admin":
            sp_result = registeruser(register.username, register.email, password_hash, register.role)
            if not sp_result["success"]:
                logger.error(f"Failed to register user '{register.username}': {sp_result['message']}")
                return ErrorResponse(success=False, status=401, message=sp_result["message"])
            user_id = sp_result["user_id"]
        else:
            logger.error(f"Invalid role '{register.role}' for user '{register.username}'")
            return ErrorResponse(success=False, status=400, message="Invalid role specified.")
        
        
        logger.info(f"User '{register.username}' registered successfully with role '{register.role}'")
        return RegisterResponse(    
            message="User registered successfully",
            user_id=user_id,
            username=register.username,
            role=register.role
        )
   except Exception as e:
        logger.error(f"Error during registration for user '{register.username}': {e}")
        return ErrorResponse(success=False, status=500, message="Something went wrong during registration. Please try again later.")
       