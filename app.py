from flask import Flask,jsonify,request,session
from werkzeug.security import generate_password_hash, check_password_hash
from config_db import Myconnection
from flask_cors import CORS
app = Flask(__name__)
app.secret_key="ganesh123"
CORS(app)


@app.route("/api/products",methods=["GET","POST"])
def product():
  conn=Myconnection()
  cursor=conn.cursor(dictionary=True)
  try:
    cursor.execute("SELECT * FROM products")
    products=cursor.fetchall()
    conn.close()
    return jsonify(products)
  except:
    return jsonify(None)
  
@app.route("/api/register",methods=["GET","POST"])
def Register():
  data=request.json
  conn=Myconnection()
  cursor=conn.cursor(dictionary=True)
  query="INSERT INTO users(username,password) VALUES (%s,%s)"
  username=data["username"]
  password=data["password"]
  psw=generate_password_hash(password)
  cursor.execute(query, (username,psw))
  conn.commit()
  conn.close()
  return jsonify({"status":"success Updated"})

@app.route("/api/login",methods=["GET","POST"])
def Login():
  data=request.json
  username=data["username"]
  password=data["password"]
  conn=Myconnection()
  cursor=conn.cursor(dictionary=True)
  queary="SELECT * FROM users WHERE username=%s"
  cursor.execute(queary,(username,))
  user=cursor.fetchone()
  if user:
    if check_password_hash(user["password"],password):
      session["username"]=user["username"]
      return jsonify({"status":"success"})
    return jsonify({"status":"invalid Password"})
  return jsonify({"status":"user not found"})


@app.route("/api/logout",methods=["GET","POST"])
def logout():
  session.clear()
  return jsonify({"status":"Logout"})

if __name__ == "__main__":
  app.run(debug=True)
