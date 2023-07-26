import os
import json
import base64

# IMPORT [.py Files]
from colors import Colors
from data.authentic import DataBase, UserDataBase

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
    user_data_base = UserDataBase()

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

    class Token(BaseModel):
        """
            User Token
        """

        token: str

    class User_Note(BaseModel):
        """
            User notes
        """
        title: str
        text: str

    @app.post("/app_login_system/auth", status_code=status.HTTP_200_OK)
    def confirm_signIN(account: Authentic_Login):
        """
            Confirm login account.

            args:
                account: JSON BODY

            return:
                accept_account: JSON user account
        """
        account = json.loads(account.json())

        # ENCODE [PASSWORD]
        encode_pass = base64.b64encode(account['password'].encode("ascii"))
        account['password'] = str(encode_pass)[2:-1]

        accept_account = {}
        
        for tuple_data in data_base.check_user_account():
            for check_db in tuple_data:
                check_db = json.loads(check_db)

                if check_db['user'] == account['user'] and check_db['password'] == account['password']:
                    # print("OK!")
                    accept_account = data_base.get_user_account(account['user'])

                    break

        return accept_account

    @app.post("/app_login_system/auto_auth", status_code=status.HTTP_200_OK)
    def confirm_auto_signIN(token: Token):
        """
            Login with user token.

            args:
                token: JSON BODY

            return:
                JSON user account
        """
        user_token = json.loads(token.json())

        return data_base.check_auto_login(user_token['token'])

    
    @app.post("/app_register_system/auth", status_code=status.HTTP_201_CREATED)
    def confirm_signUP(account: Authentic_Register):
        """
            Register a new account.

            args:
                account: JSON BODY

            return:
                account: JSON user account
        """
        account = json.loads(account.json())

        data_base.create_new_user(account)

        return {"response": "CREATED"}

    @app.post("/app_create_user_note/{user}", status_code=status.HTTP_201_CREATED)
    def create_new_note(user: str, note: User_Note):
        """
            Create a new note (user) route.

            args:
                user: str
                note: JSON BODY
        """

        user_data_base.create_user_note(user)

        return note
    
    @app.get("/app_read_user_note/{user}", status_code=status.HTTP_202_ACCEPTED)
    def read_new_note(user: str):
        """
            Read all notes (user) route.

            args:
                user: str
        """

        return user_data_base.read_all_user_note(user)
    
    @app.put("/app_update_user_note/{user}_{id}", status_code=status.HTTP_200_OK)
    def update_new_note(user: str, id: str, note: User_Note):
        """
            Update a note (user) route.

            args:
                user: str
                id: int
                note: JSON BODY
        """
        user_note = json.loads(note.json())

        user_data_base.update_user_note(user, id, user_note)

        return {"response": "UPDATED", "data": note}

    @app.delete("/app_delete_user_note/{user}_{id}", status_code=status.HTTP_410_GONE)
    def delete_new_note(user: str, id: int):
        """
            Delete a note.

            args:
                user: str
                id: int
        """

        user_data_base.delete_user_note(user, id)

        return {"response": "DELETED"}

        

    if __name__ == '__main__':
        uvicorn.run("main:app", host='127.0.0.1', port=8000, reload=True)