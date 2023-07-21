import os
import uuid
import json
import base64

try:
    import mysql.connector

except ModuleNotFoundError:
    os.system("pip install mysql-connector-python")

finally:
    pass

class DataBase:
    # MySQL Connection
    con_json = json.load(open('backend/data/connect.json', encoding="utf-8"))

    con = mysql.connector.connect(
        host = con_json['host'],
        user = con_json['user'],
        password = con_json['password'],
        database = con_json['database'],
        auth_plugin='mysql_native_password'
    )
    cursor = con.cursor()

    def create_user_table(self, user):
        """
            Create a note table.
        """

        query = f"""CREATE TABLE user_notes."{user}" (id_note INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(45) NOT NULL, text VARCHAR(200) NOT NULL)"""
        self.cursor.execute(query)
    
    # ======================================================
    
    def check_account(self):
        """
            Take all the data (user accounts) and make a comparison.
        """

        query = 'SELECT user_account FROM authentic_accounts.accounts_users'
        self.cursor.execute(query)
        data = self.cursor.fetchall()
        return data

    def create_new_user(self, account):
        """
            Create a new account. Gym Notes.
        """

        # ENCODE [PASSWORD]
        encode_pass = base64.b64encode(account['password'].encode("ascii"))
        account['password'] = str(encode_pass)[2:-1]

        # GENERATE A USER ID
        user_uuid = uuid.uuid4()
        data = {
            "id": str(user_uuid),
            "user": account['user'],
            "email": account['email'],
            "password": account['password']
        }

        query = f"""INSERT INTO `authentic_accounts`.`accounts_users` (`iduser_account`, `user_account`, `user_notes`) VALUES ('{data['id']}', '{{
            "id": "{data['id']}",
            "user": "{data['user']}",
            "email": "{data['email']}",
            "password": "{data['password']}"}}', '{data['user']}')"""
        self.cursor.execute(query)
        self.con.commit()

        # USER TABLE
        # self.create_user_table(data['user'])
