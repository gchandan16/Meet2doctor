# app/main.py
from fastapi import FastAPI
from app.routers import auth, doctors,hospital_routes,patient_routes


app = FastAPI(title="Meet2Doctor API")

# Include routers
app.include_router(auth.router)
app.include_router(doctors.router)
app.include_router(hospital_routes.router)
app.include_router(patient_routes.router)

@app.get("/")
def home():
    return {"msg": "Meet2Doctor API is running!"}
