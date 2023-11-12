from pydantic_settings import BaseSettings
from dotenv import load_dotenv

load_dotenv()

class MainConfig(BaseSettings):
    #main
    APP_NAME: str | None = "Pobeda"
    APP_VERSION: str | None = "1.0.0"


config = MainConfig('.env')