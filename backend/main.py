from fastapi import FastAPI
from fastapi.responses import JSONResponse

from uvicorn import run

from starlette.middleware.cors import CORSMiddleware

from settings import config
from routes import get_apps_router

app = FastAPI(title=config.APP_NAME, version=config.APP_VERSION)
app.include_router(get_apps_router())
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get('/', include_in_schema=False)
async def root():
    return JSONResponse({'service': config.APP_NAME, 'version': config.APP_VERSION})

if __name__ == "__main__":
    run("main:app", host="127.0.0.1", port=8080, reload=True)