# app/routers/doctor.py
from fastapi import APIRouter
from app.core.database import get_connection

# create router object
router = APIRouter(prefix="/doctors", tags=["Doctors"])

@router.get("/")
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
