import os

from dotenv import load_dotenv
# pyrefly: ignore [missing-import]
from pymongo import AsyncMongoClient
# pyrefly: ignore [missing-import]
from pymongo.errors import PyMongoError

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")
MONGODB_DB_NAME = os.getenv("MONGODB_DB_NAME", "travel_management")

if not MONGODB_URI:
    raise RuntimeError("MONGODB_URI is missing. Add it to your .env file.")

client = AsyncMongoClient(MONGODB_URI)
database = client[MONGODB_DB_NAME]


async def create_database_indexes() -> None:
    await database.users.create_index(
        "email",
        unique=True,
        name="unique_user_email",
    )
    print("MongoDB indexes are ready.")


async def connect_to_mongodb() -> None:
    try:
        await client.admin.command("ping")
        await create_database_indexes()
        print("Connected to MongoDB Atlas successfully.")
    except PyMongoError as error:
        print(f"MongoDB connection failed: {error}")
        raise


async def close_mongodb_connection() -> None:
    await client.close()
    print("MongoDB connection closed.")