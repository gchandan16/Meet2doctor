# app/main.py
from fastapi import FastAPI
from app.routers import auth, doctors,hospital_routes,patient_routes,appointment_routes,feedback_routes,doctor_hospital_routes


app = FastAPI(title="Meet2Doctor API")

# Include routers
app.include_router(auth.router)
app.include_router(doctors.router)
app.include_router(hospital_routes.router)
app.include_router(patient_routes.router)
app.include_router(appointment_routes.router)
app.include_router(feedback_routes.router)
app.include_router(doctor_hospital_routes.router)


@app.get("/")
def home():
    return {"msg": "Meet2Doctor API is running!"}
