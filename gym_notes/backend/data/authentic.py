import os
import uuid
import json
import base64
import string
import secrets

from random import randint

try:
    import mysql.connector

except ModuleNotFoundError:
    os.system("pip install mysql-connector-python")

finally:
    pass

class UserDataBase:
    """
        User private data base.
    """

    # MySQL Connection
    con_json = json.load(open('backend/data/connect.json', encoding="utf-8"))

    con = mysql.connector.connect(
        host = con_json['host'],
        user = con_json['user'],
        password = con_json['password'],
        database = con_json['database_users'],
        auth_plugin='mysql_native_password'
    )
    cursor = con.cursor()

    def create_user_table(self, user: str):
        """
            Create a note table.
        """
        cursor = self.con.cursor()

        query = f"""CREATE TABLE `user_notes`.`{user}` (id_note INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(45) NOT NULL, text VARCHAR(200) NOT NULL)"""
        cursor.execute(query)
        
        # ALERT
        print('\033[36m' + "INFO [REGISTER_USER] :  " + '\033[m', end="")
        print(f"[{user}] table sucessfully created!")

        cursor.close()

class DataBase:
    # VERIFY
    UUID_VERIFY = True
    TOKEN_VERIFY = True
    USER_ACCOUNT_VERIFY = True

    # User (create) table
    user_data_base = UserDataBase()

    # MySQL Connection
    con_json = json.load(open('backend/data/connect.json', encoding="utf-8"))

    con = mysql.connector.connect(
        host = con_json['host'],
        user = con_json['user'],
        password = con_json['password'],
        database = con_json['database_authentic'],
        auth_plugin='mysql_native_password'
    )

    def get_user_account(self, user: str):
        """
            Get all user accounts in the database and return the logged in customer account.
        """
        cursor = self.con.cursor()

        query = 'SELECT * FROM authentic_accounts.accounts_users'
        cursor.execute(query)
        data = cursor.fetchall()

        set_account = {
            "id": "",
            "user": "",
            "email": "",
            "token": ""
        }

        for account in data:
            if user == account[2]:
                account_json = json.loads(account[1])
                set_account["id"] = account_json["id"]
                set_account["user"] = account_json["user"]
                set_account["email"] = account_json["email"]
                set_account["token"] = account[3]

                break
        
        # print(set_account)
        return set_account

    def check_id_account(self):
        """
            Take all the data (ID) and make a comparison.
        """
        cursor = self.con.cursor()

        query = 'SELECT iduser_account FROM authentic_accounts.accounts_users'
        cursor.execute(query)
        data = cursor.fetchall()

        cursor.close()
        
        return data
    
    def check_token_account(self):
        """
            Take all the data (TOKEN) and make a comparison.
        """
        cursor = self.con.cursor()

        query = 'SELECT token FROM authentic_accounts.accounts_users'
        cursor.execute(query)
        data = cursor.fetchall()

        cursor.close()
        
        return data
    
    def check_username_account(self):
        """
            Take all the data (USERNAME) and make a comparison.
        """
        cursor = self.con.cursor()

        query = 'SELECT user_notes FROM authentic_accounts.accounts_users'
        cursor.execute(query)
        data = cursor.fetchall()

        cursor.close()
        return data
    
    def check_user_account(self):
        """
            Take all the data (user accounts) and make a comparison.
        """
        cursor = self.con.cursor()

        query = 'SELECT user_account FROM authentic_accounts.accounts_users'
        cursor.execute(query)
        data = cursor.fetchall()

        cursor.close()
        return data

    def create_new_user(self, account):
        """
            Create a new account. Gym Notes.
        """
        cursor = self.con.cursor()

        # User convert
        user_convert = account['user'].lower().strip().replace(" ", "_")

        # ENCODE [PASSWORD]
        encode_pass = base64.b64encode(account['password'].encode("ascii"))
        account['password'] = str(encode_pass)[2:-1]

        # ENCODE [USER]
        encode_user = base64.b64encode(account['password'].encode("ascii"))
        account['user'] = str(encode_user)[2:-1]

        # GENERATE A USER ID and TOKEN
        user_uuid = uuid.uuid4()

        user_id = self.generate_user_id()
        token = self.generate_token(account['user'])
        
        data = {
            "id": user_id,
            "user": user_convert,
            "email": account['email'],
            "password": account['password'],
            "token": token
        }

        for id_account_db in self.check_id_account():
            if user_uuid == id_account_db:
                self.UUID_VERIFY = False
                break

        for token_db in self.check_token_account():
            if data["token"] == token_db:
                self.TOKEN_VERIFY = False
                break

        for username_db in self.check_username_account():
            if data["user"] == username_db:
                self.USER_ACCOUNT_VERIFY = False
                break

        if(self.UUID_VERIFY and self.TOKEN_VERIFY and self.USER_ACCOUNT_VERIFY):
            query = f"""INSERT INTO `authentic_accounts`.`accounts_users` (`iduser_account`, `user_account`, `user_notes`, `token`) VALUES (
                '{user_uuid}', '{{
                "id": "{data['id']}",
                "user": "{data['user']}",
                "email": "{data['email']}",
                "password": "{data['password']}"}}',
                '{data['user']}',
                '{data['token']}'
            )"""

            cursor.execute(query)
            self.con.commit()

            # ALERT
            print('\033[36m' + "INFO [REGISTER_USER] :  " + '\033[m', end="")
            print(f"NEW USER -> [{user_convert}]")

            # USER TABLE
            self.user_data_base.create_user_table(data['user'])
            cursor.close()

    def generate_user_id(self) -> str:
        """
            Generate a user ID.

            return:
                user_id : str
        """

        alphabet = string.ascii_letters + string.digits

        user_id = ''.join(secrets.choice(alphabet) for i in range(10))

        return user_id

    def generate_token(self, user: str) -> str:
        """
            Generate a user token.

            args:
                user, id_user: String encode

            return:
                token : str
        """

        caracters = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "-"
        ]

        pref_token = ""

        for num in range(1, 17):
            randomNum = randint(0, len(caracters)-1)
            pref_token = pref_token + caracters[randomNum]

        return f"{user}.{pref_token}"