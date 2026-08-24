from datetime import datetime, timezone

from fastapi import APIRouter, HTTPException, status
# pyrefly: ignore [missing-import]
from pymongo.errors import DuplicateKeyError

from app.database import database
from app.schemas.auth import SignUpRequest, SignUpResponse, UserResponse
from app.security import hash_password

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"],
)


@router.post(
    "/signup",
    response_model=SignUpResponse,
    status_code=status.HTTP_201_CREATED,
)
async def signup(payload: SignUpRequest):
    existing_user = await database.users.find_one(
        {"email": payload.email.lower()}
    )

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email already exists.",
        )

    user_document = {
        "full_name": payload.full_name.strip(),
        "email": payload.email.lower(),
        "phone_number": payload.phone_number.strip(),
        "hashed_password": hash_password(payload.password),
        "created_at": datetime.now(timezone.utc),
    }

    try:
        result = await database.users.insert_one(user_document)
    except DuplicateKeyError:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email already exists.",
        )

    return {
        "message": "Account created successfully.",
        "user": UserResponse(
            id=str(result.inserted_id),
            full_name=user_document["full_name"],
            email=user_document["email"],
            phone_number=user_document["phone_number"],
            created_at=user_document["created_at"],
        ),
    }