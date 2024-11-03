from pydantic import BaseModel


class SearchParams(BaseModel):
    location: str
    radius: int
    userAge: int
    userGender: str
    userDescription: str
    userLanguages: list[str]


class ApplicationForm(BaseModel):
    flatId: int
    message: str
