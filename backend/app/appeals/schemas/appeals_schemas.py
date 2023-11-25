from pydantic import Field, BaseModel

from typing import Annotated

from fastapi import Query, File, UploadFile

class AppealSchema(BaseModel):
    appealText: str = Field(), Query(defaul='', description='Текст обращения гражданина')

class AppealResponceSchema(BaseModel):
    appealGroup: str = Field(), Query(defaul='', description='Группа обращения')
    appealSubGroup: str = Field(), Query(defaul='', description='Подгруппа обращения')

class ListAppealsResponseSchema(AppealResponceSchema):
    appealText: str = Field(min_length=1), Query(defaul='', description='Текст обращения гражданина')

class AppealsParams:
    def __init__(
            self,
            appealsText: Annotated[tuple, Query(description="Текст обращения гражданина")] = ()
    ):
        self.appealsText = appealsText