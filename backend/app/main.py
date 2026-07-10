from fastapi import FastAPI

from app.api.router import api_router

app = FastAPI(
    title="Tekad Inframon API",
    version="0.1.0",
    description="Open Infrastructure Management Platform for Education",
)

app.include_router(api_router)


@app.get("/")
def root():
    return {
        "project": "Tekad Inframon",
        "message": "Welcome to Tekad Inframon API",
    }
