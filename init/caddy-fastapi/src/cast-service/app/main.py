from fastapi import FastAPI
from app.api.casts import casts
from app.api.db import metadata, database, engine

metadata.create_all(engine)

app = FastAPI(openapi_url="/api/v1/casts/openapi.json", docs_url="/api/v1/casts/docs")

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/")
def read_root():
    return {"Hello": "World in root"}

@app.get("/health")
def read_root():
    return "OK"

app.include_router(casts, prefix='/api/v1/casts', tags=['casts'])