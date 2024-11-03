# main.py
from fastapi import FastAPI

from backend.api.search_params import SearchParams

app = FastAPI()


@app.get("/")
async def read_root():
    return {"status": "OK"}


@app.get("/next/{flat_id}")
async def next_listing(flat_id: int):
    return {"next": flat_id + 1}


@app.get("/previous/{flat_id}")
async def previous_listing(flat_id: int):
    return {"previous": flat_id - 1}


@app.post("/search-params")
async def set_search_params(params: SearchParams):
    return params
