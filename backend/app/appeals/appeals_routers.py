from fastapi import APIRouter

from .contollers import (
    appeals_controller
)


appeals_routers = APIRouter()
appeals_routers.include_router(appeals_controller.router)