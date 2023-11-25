from ..schemas.appeals_schemas import (
    AppealResponceSchema,
    AppealSchema,
    ListAppealsResponseSchema
)
from mock_data.data import mock_data, mock_data_list
import csv
import codecs

from fastapi import UploadFile, File
import pandas as pd
from ml.method.main import predict_group


class AppealsServices:

    async def sendAppeal(self, appeal: AppealSchema) -> AppealResponceSchema:
        incident = pd.DataFrame([appeal.appealText,], columns=['Текст инцидента'])
        result = predict_group(incident)
        return AppealResponceSchema.parse_obj({'appealGroup': result['group'][0][0], 'appealSubGroup': result['theme'][0][0]})
    
    async def sendListAppeals(self, appeals: UploadFile = File(...)) -> list[ListAppealsResponseSchema]:
        "todo: Добавить логику взаимодействия."
        csvReader = csv.DictReader(codecs.iterdecode(appeals.file, 'utf-8'), delimiter=';')
        header = csvReader.__next__()
        df = pd.DataFrame(csvReader, columns=header)
        appealsList = []
        sd  = pd.DataFrame(df['Текст инцидента'], columns=['Текст инцидента'])
        result = predict_group(sd)
        # for index, row in df.iterrows():
        #     try:
        #         incident = pd.DataFrame([row['Текст инцидента'],], columns=['Текст инцидента'])
        #         result = predict_group(incident)
        #         appealsList.append({'appealGroup': result['group'][0][0], 'subGroup': result['theme'][0][0], 'appealText': row['Текст инцидента']})
        #     except Exception as e:
        #         print(incident)
        #         print(e) 
        #     counter += 1
        #     print(counter)
        return appealsList
    