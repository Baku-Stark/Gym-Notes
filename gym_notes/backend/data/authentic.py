import os
import uuid
import json

try:
    import mysql.connector

except ModuleNotFoundError:
    os.system("pip install mysql-connector-python")

finally:
    print("Finaly!")

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

    def read_accounts(self):
        """
            Read user's account in the table.
        """

        query = 'SELECT user_account FROM authentic_accounts.accounts_users'
        self.cursor.execute(query)
        data = self.cursor.fetchall()
        return data

myuuid = uuid.uuid4()
print('Your UUID is: ' + str(myuuid))