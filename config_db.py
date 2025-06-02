import mysql.connector
import os
from dotenv import load_dotenv

from pathlib import Path

env_path = Path(__file__).parent / '.env'
load_dotenv(dotenv_path=env_path)


def Myconnection():
  try:
    conn = mysql.connector.connect(
      host=os.getenv("DB_host"),
      user=os.getenv("DB_user"),
      password=os.getenv("DB_password"),
      database=os.getenv("DB_database"),
    )
    print("Successfully connected to mysql database!")
    return conn
  except mysql.connector.Error as err:
    print (err)
    return None
