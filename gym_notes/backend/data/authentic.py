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

    def check_account(self):
        """
            Take all the data (user accounts) and make a comparison.
        """

        query = 'SELECT user_account FROM authentic_accounts.accounts_users'
        self.cursor.execute(query)
        data = self.cursor.fetchall()
        return data

    def create_new_user(self):
        """
            Create a new account. Gym Notes.
        """

        # ENCODE [PASSWORD]
        encode_pass = base64.b64encode("Wallace".encode("ascii"))
        password = str(encode_pass)[2:-1]

        # GENERATE A USER ID
        user_uuid = uuid.uuid4()
        print('Your UUID is: ' + str(user_uuid))