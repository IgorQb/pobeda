from ..schemas.domen1_schemas import (
    Domen1Schemas,
    CreateDomen1Schemas,
    UpdateDomen1Schema
)
from mock_data.data import mock_data

class Domen1Service:
    async def create(self, data: CreateDomen1Schemas) -> CreateDomen1Schemas:
       mock_data.append(data.model_dump())
       return mock_data[-1]

    async def update(self, id: int, data: UpdateDomen1Schema) -> UpdateDomen1Schema:
        mock_data[id] = data
        return mock_data[id]
    
    async def delete(self, id: int) -> None:
        del mock_data[id]
        return mock_data

    async def get_single(self, id: int) -> Domen1Schemas | None:
        return mock_data[id]

    async def get_multi(self) -> list[Domen1Schemas] | None:
        return mock_data