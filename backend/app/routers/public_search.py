from typing import List,Literal
from fastapi import APIRouter,Query
from app.services.search_service import SearchService
from app.core.logging import logger

router=APIRouter(prefix="/public", tags=["Public Search"])
service=SearchService()

@router.get("/search")
def search(
   q: str = Query("", description="Search keyword"),
   type:Literal["all","doctors","hospitals"]="all",
   page:int=Query(1, ge=1, description="Page number"),
   page_size: int = Query(10, ge=1, le=100, description="Records per page"),
   sort_by:Literal["name_asc","name_desc","exp_asc","exp_desc","spec_asc"]="name_asc"
   ):
    keyword=q.strip()
    logger.info(f"Public search called with keyword: {keyword} and type: {type}")
    if type=="doctors":
        return service.search_doctors(q,page,page_size,sort_by)
    elif type=="hospitals":
        return service.search_hospitals(q)
    else:
     return service.search_all(q)