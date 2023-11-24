from fastapi import Depends, HTTPException, APIRouter, UploadFile, File
from starlette.status import HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT, HTTP_404_NOT_FOUND

from ..schemas.appeals_schemas import (
  AppealSchema,
  AppealResponceSchema,
  ListAppealsResponseSchema
)
from ..services.appeals_services import AppealsServices

router = APIRouter(prefix="/appeals", tags=["Обращения"])

@router.get("/", response_model=AppealResponceSchema, description="Классификация обращения")
async def sendAppeal(
        appealsText: AppealSchema,
        service: AppealsServices = Depends()
) -> AppealSchema:
    try:
        return await service.sendAppeal(appeal=appealsText)
    except Exception as e:
        raise HTTPException(HTTP_400_BAD_REQUEST, str(e))
    

@router.get("/upload", response_model=list[ListAppealsResponseSchema], description="Классификация списка обращений")
async def sendListAppeals(
        appeals: UploadFile,
        service: AppealsServices = Depends()
) -> list[ListAppealsResponseSchema]:
    try:
        return await service.sendListAppeals(appeals=appeals)
    except Exception as e:
        raise HTTPException(HTTP_400_BAD_REQUEST, str(e))