from fastapi import APIRouter

from .contollers import (
    domen1_controller
)


domen1_routers = APIRouter()
domen1_routers.include_router(domen1_controller.router)