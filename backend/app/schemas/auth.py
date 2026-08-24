from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class SignUpRequest(BaseModel):
    full_name: str = Field(
        min_length=2,
        max_length=100,
        examples=["Geethmani Mirahawaththa"],
    )
    email: EmailStr = Field(
        examples=["geethmani@gmail.com"],
    )
    phone_number: str = Field(
        min_length=7,
        max_length=20,
        examples=["+94771234567"],
    )
    password: str = Field(
        min_length=8,
        max_length=72,
        examples=["SecurePass123!"],
    )


class UserResponse(BaseModel):
    id: str
    full_name: str
    email: EmailStr
    phone_number: str
    created_at: datetime


class SignUpResponse(BaseModel):
    message: str
    user: UserResponse