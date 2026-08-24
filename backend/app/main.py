from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import close_mongodb_connection, connect_to_mongodb


@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_to_mongodb()
    yield
    await close_mongodb_connection()


app = FastAPI(
    title="Travel Management API",
    description="Backend API for the Travel Management application.",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["Health"])
async def root():
    return {
        "message": "Travel Management API is running.",
        "database": "MongoDB Atlas",
    }


@app.get("/health", tags=["Health"])
async def health_check():
    return {
        "status": "ok",
        "service": "travel-management-backend",
    }