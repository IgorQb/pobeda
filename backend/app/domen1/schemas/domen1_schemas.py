from pydantic import Field, BaseModel

from typing import Annotated
from datetime import datetime

from fastapi import Query

class Domen1Schemas(BaseModel):
    field1: str = Field(max_length=256, min_length=1), Query(defaul='', description='Поле 1')
    field2: str = Field(max_length=256, min_length=1), Query(defaul='', description='Поле 2')
    field3: str = Field(max_length=256, min_length=1), Query(defaul='', description='Поле 3')

class CreateDomen1Schemas(Domen1Schemas):
    pass

class UpdateDomen1Schema(Domen1Schemas):
    pass

class Domen1ResponseSchema(Domen1Schemas):
    id: int
    created_at: datetime

class Domen1Params:
    """Параметры для фильтрации и сортировки пользователей"""
    def __init__(
            self,
            field1: Annotated[tuple, Query(description="Поле 1")] = (),
            field2: Annotated[tuple, Query(description="Поле 2")] = (),
            field3: Annotated[tuple, Query(description="Поле 3")] = (),
    ):
        self.field1 = field1
        self.field2 = field2
        self.field3 = field3