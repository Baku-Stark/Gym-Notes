import os

# IMPORT [.py Files]
from colors import Colors

try:
    # link: https://fastapi.tiangolo.com/
    # pip install fastapi
    import uvicorn
    from fastapi import FastAPI, status
    from pydantic import BaseModel
    from fastapi.middleware.cors import CORSMiddleware

    os.system('cls')

except ModuleNotFoundError:
    print(Colors.BACK_RED + " INFO " + Colors.END, end="")
    print(Colors.RED + " Installing required packages... " + Colors.END)
    os.system('python.exe -m pip install --upgrade pip')
    os.system('pip install -r backend/requirements.txt')

finally:
    print(Colors.BACK_GREEN + " INFO " + Colors.END, end="")
    print(Colors.GREEN + " Authentication service activated successfully " + Colors.END)

    app = FastAPI()

    origins = ["*"]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    class authentic_login(BaseModel):
        user: str
        password: str

    class authentic_register(BaseModel):
        user: str
        email: str
        password: str

    if __name__ == '__main__':
        uvicorn.run("main:app", host='127.0.0.1', port=8000, reload=True)