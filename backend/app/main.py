# app/main.py
from app.routers import auth
from fastapi import FastAPI
from app.routers import doctors

app = FastAPI(title="Meet2Doctor API")

# Include routers
app.include_router(auth.router)
app.include_router(doctors.router)

@app.get("/")
def home():
    return {"msg": "Meet2Doctor API is running!"}
