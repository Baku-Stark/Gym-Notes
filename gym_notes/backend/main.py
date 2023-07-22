import os
import json

# IMPORT [.py Files]
from colors import Colors
from data.authentic import DataBase

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
    data_base = DataBase()

    origins = ["*"]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    class Authentic_Login(BaseModel):
        """
            JSON Base Body (login)
        """
        user: str
        password: str

    class Authentic_Register(BaseModel):
        """
            JSON Base Body (register)
        """
        user: str
        email: str
        password: str

    # http://127.0.0.1:8000/app_login_system/auth
    @app.get("/app_login_system/auth", status_code=status.HTTP_202_ACCEPTED)
    def confirm_signIN(account: Authentic_Login):
        """
            Confirm login account.

            args:
                account: JSON BODY
        """
        check_account = data_base.check_account()
        account = json.loads(account.json())
        
        for tuple_data in check_account:
            for check_db in tuple_data:
                check_db = json.loads(check_db)

                if check_db['user'] == account['user'] and check_db['password'] == account['password']:
                    return {
                        "response": True,
                        "data": check_db
                    }

                else:
                    return {"response": False}
    
    # http://127.0.0.1:8000/app_register_system/auth
    @app.post("/app_register_system/auth", status_code=status.HTTP_201_CREATED)
    def confirm_signUP(account: Authentic_Register):
        """
            Register a new account.

            args:
                account: JSON BODY
        """
        account = json.loads(account.json())

        data_base.create_new_user(account)

        return account

    if __name__ == '__main__':
        uvicorn.run("main:app", host='127.0.0.1', port=8000, reload=True)