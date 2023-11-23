from fastapi import APIRouter

from app.appeals.appeals_routers import appeals_routers


def get_apps_router():
    router = APIRouter()
    router.include_router(appeals_routers)
    return router