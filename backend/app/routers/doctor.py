# app/routers/doctor.py
from fastapi import APIRouter,Depends
from app.core.database import get_connection
from app.core.jwt_handler import verify_token

# create router object
router = APIRouter(prefix="/doctors", tags=["Doctors"])

@router.get("/",dependencies=[Depends(verify_token)])
def get_doctors():
    conn = get_connection()
    if not conn:
        return {"error": "Database connection failed"}

    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM doctors")   # table must exist
    result = cursor.fetchall()
    cursor.close()
    conn.close()

    return {"doctors": result}
