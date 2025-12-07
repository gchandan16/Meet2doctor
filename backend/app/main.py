# app/main.py
from fastapi import FastAPI
from app.routers import auth, doctors,hospital_routes,patient_routes,appointment_routes,feedback_routes,doctor_hospital_routes
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Meet2Doctor API")

origins = [
    "http://localhost:5173",   # your frontend dev URL
    # "http://localhost:3000", # other dev urls if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,       # or ["*"] for all during dev
    allow_credentials=True,      # set True if you use cookies/auth credentials
    allow_methods=["*"],         # ["GET","POST","PUT",...]
    allow_headers=["*"],         # or specific headers
)

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
