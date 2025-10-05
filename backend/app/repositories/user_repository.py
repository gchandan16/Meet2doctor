from app.core.database import get_connection
from app.core.logging import logger


#Register doctor with stored procedure
def registerdoctor(username, email, password_hash, role, specialization:str="General", experience_years:int=0):
    conn = get_connection()
    cursor = conn.cursor()
    try:
        # Prepare output variables
        args = [username, email, password_hash, role, specialization, experience_years, 0, 0, ""]
        result_args = cursor.callproc('sp_register_doctor', args)

        # Fetch output params
        user_id = result_args[6]
        success = result_args[7]
        message = result_args[8]

        conn.commit()
        logger.info(f"Stored Procedure Result: {message}")
        return {"success": bool(success), "user_id": user_id, "message": message}

    except Exception as e:
        conn.rollback()
        logger.error(f"Error executing stored procedure: {e}")
        return {"success": False, "user_id": None, "message": str(e)}

    finally:
        cursor.close()
        conn.close()

#for Patient registration using stored procedure
def registerpatient(username, email, password_hash, role, age:int=0, gender:str="Not Specified", blood_group:str="Not Specified"):
    conn = get_connection()
    cursor = conn.cursor()
    try:
        # Prepare arguments (inputs + outputs)
        args = [
            username,
            email,
            password_hash,
            role,
            age,
            gender,
            blood_group,
            0,               # OUT p_user_id
            0,               # OUT p_success
            ""               # OUT p_message
        ]

        # Call the stored procedure
        result_args = cursor.callproc('sp_register_patient', args)

        # Extract OUT parameters
        user_id = result_args[7]
        success = result_args[8]
        message = result_args[9]

        conn.commit()
        logger.info(f"Stored Procedure 'sp_register_patient' executed successfully: {message}")

        return {
            "success": bool(success),
            "user_id": user_id,
            "message": message
        }

    except Exception as e:
        conn.rollback()
        logger.error(f"Error executing stored procedure 'sp_register_patient': {e}")
        return {
            "success": False,
            "user_id": None,
            "message": str(e)
        }

    finally:
        cursor.close()
        conn.close() 

#for Patient registration using stored procedure
def registeruser(username, email, password_hash, role):
    conn = get_connection()
    cursor = conn.cursor()
    try:
        # Prepare arguments (inputs + outputs)
        args = [
            username,
            email,
            password_hash,
            role,
            0,               # OUT p_user_id
            0,               # OUT p_success
            ""               # OUT p_message
        ]

        # Call the stored procedure
        result_args = cursor.callproc('sp_register_user', args)

        # Extract OUT parameters
        user_id = result_args[4]
        success = result_args[5]
        message = result_args[6]

        conn.commit()
        logger.info(f"Stored Procedure 'sp_register_user' executed successfully: {message}")

        return {
            "success": bool(success),
            "user_id": user_id,
            "message": message
        }

    except Exception as e:
        conn.rollback()
        logger.error(f"Error executing stored procedure 'sp_register_user': {e}")
        return {
            "success": False,
            "user_id": None,
            "message": str(e)
        }

    finally:
        cursor.close()
        conn.close()                

def get_user_by_username(username: str, email: str=None):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    try:
        cursor.execute("SELECT * FROM users WHERE username=%s OR email=%s", (username, email))
        return cursor.fetchone()
    finally:
        cursor.close()
        conn.close()
        logger.info(f"DB connection closed in get_user_by_username for '{username}'")

def get_doctor_details(user_id: int):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    try:
        cursor.execute("SELECT * FROM doctors WHERE user_id=%s", (user_id,))
        return cursor.fetchone()
    finally:
        cursor.close()
        conn.close()

def get_patient_details(user_id: int):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    try:
        cursor.execute("SELECT * FROM patients WHERE user_id=%s", (user_id,))
        return cursor.fetchone()
    finally:
        cursor.close()
        conn.close()
        logger.info(f"DB connection closed in get_patient_details for user_id '{user_id}'")




