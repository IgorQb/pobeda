from fastapi import APIRouter

from app.domen1.domen1_routers import domen1_routers


def get_apps_router():
    router = APIRouter()
    router.include_router(domen1_routers)
    return router