from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Tekad Inframon API"
    app_version: str = "0.1.0"
    cors_origins: list[str] = ["http://localhost:5173"]

    class Config:
        env_file = ".env"


settings = Settings()