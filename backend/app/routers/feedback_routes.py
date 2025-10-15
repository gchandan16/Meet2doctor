# app/routers/feedback_routes.py
from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.feedback_schema import FeedbackCreate, FeedbackOut
from app.services.feedback_service import FeedbackService
from app.core.jwt_handler import verify_token
from app.core.logging import logger

router = APIRouter(
    prefix="/feedbacks",
    tags=["Feedback"]
)

# -------------------------
# POST - Add Feedback
# -------------------------
@router.post("/", status_code=status.HTTP_201_CREATED)
def add_feedback(feedback: FeedbackCreate, current_user=Depends(verify_token)):
    logger.info(f"feedback routes is calling:{feedback} ")
    return FeedbackService.add_feedback(feedback)

# -------------------------
# GET - Get All Feedback
# -------------------------
@router.get("/", response_model=list[FeedbackOut])
def get_all_feedback(current_user=Depends(verify_token)):
    logger.info(f"feedback routes is calling ")
    return FeedbackService.get_all_feedback()

# -------------------------
# GET - Feedbacks for Doctor
# -------------------------
@router.get("/doctor/{doctor_id}", response_model=list[FeedbackOut])
def get_feedbacks_for_doctor(doctor_id: int, current_user=Depends(verify_token)):
    return FeedbackService.get_feedbacks_for_doctor(doctor_id)

# -------------------------
# GET - Feedbacks by Patient
# -------------------------
@router.get("/patient/{patient_id}", response_model=list[FeedbackOut])
def get_feedbacks_by_patient(patient_id: int, current_user=Depends(verify_token)):
    logger.info(f"calling routes feedback by patientid {patient_id}")
    return FeedbackService.get_feedbacks_by_patient(patient_id)

# -------------------------
# DELETE - Delete Feedback
# -------------------------
@router.delete("/{feedback_id}", status_code=status.HTTP_200_OK)
def delete_feedback(feedback_id: int, current_user=Depends(verify_token)):
    return FeedbackService.delete_feedback(feedback_id)
