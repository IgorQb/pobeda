from fastapi import Depends, HTTPException, APIRouter
from starlette.status import HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT, HTTP_404_NOT_FOUND

from ..schemas.domen1_schemas import (
  Domen1Schemas,
  CreateDomen1Schemas,
  UpdateDomen1Schema
)
from ..services.domen1_services import Domen1Service

router = APIRouter(prefix="/method1", tags=["Метод 1"])

@router.get("/", response_model=list[Domen1Schemas])
async def get_multi(
        service: Domen1Service = Depends()
) -> list[Domen1Schemas]:
    try:
        return await service.get_multi()
    except Exception as e:
        raise HTTPException(HTTP_400_BAD_REQUEST, str(e))
    

@router.get("/{id}", response_model=Domen1Schemas)
async def get_single(
        id: int,
        service: Domen1Service = Depends()
) -> Domen1Schemas:
    try:
        return await service.get_single(id=id)
    except IndexError:
        raise HTTPException(HTTP_404_NOT_FOUND, "Данных нет.")
    except Exception as e:
        raise HTTPException(HTTP_400_BAD_REQUEST, str(e))
    

@router.post("/", response_model=CreateDomen1Schemas)
async def create(
        data: CreateDomen1Schemas,
        service: Domen1Service = Depends(),
) -> CreateDomen1Schemas:
    try:
        return await service.create(data=data)
    except Exception as e:
        raise HTTPException(HTTP_400_BAD_REQUEST, str(e))



@router.put("/{id}", response_model=UpdateDomen1Schema)
async def update(
        id: int,
        data: UpdateDomen1Schema,
        service: Domen1Service = Depends()
) -> UpdateDomen1Schema:
    try:
        return await service.update(id=id, data=data)
    except IndexError:
        raise HTTPException(HTTP_404_NOT_FOUND, "Нечего обновлять.")
    except Exception as e:
        raise HTTPException(HTTP_400_BAD_REQUEST, str(e))


@router.delete("/{id}", status_code=HTTP_204_NO_CONTENT)
async def delete(
        id: int,
        service: Domen1Service = Depends()
) -> None:
    try:
        return await service.delete(id=id)
    except IndexError:
        raise HTTPException(HTTP_404_NOT_FOUND, "Нечего удалять.")
    except Exception as e:
        raise HTTPException(HTTP_400_BAD_REQUEST, str(e))