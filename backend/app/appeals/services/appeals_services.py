from ..schemas.appeals_schemas import (
    AppealResponceSchema,
    AppealSchema,
    ListAppealsResponseSchema
)
from mock_data.data import mock_data, mock_data_list

from fastapi import UploadFile, File


class AppealsServices:
    async def sendAppeal(self, appeal: AppealSchema) -> AppealResponceSchema:
        "todo: Добавить логику взаимодействия."
        return mock_data[0]
    
    async def sendListAppeals(self, appeals: UploadFile) -> list[ListAppealsResponseSchema]:
        "todo: Добавить логику взаимодействия."
        return mock_data_list