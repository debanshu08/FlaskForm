from flask import Flask, json,render_template,redirect,request,url_for,session,jsonify
from flask_cors.decorator import cross_origin
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


app.secret_key = "hello"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

db = SQLAlchemy(app)

class users(db.Model):
    _id = db.Column("id",db.Integer,primary_key=True)
    name = db.Column("name",db.String(100))
    email = db.Column("email",db.String(100))
    username = db.Column("username",db.String(64),unique=True,nullable=False)
    password = db.Column("password",db.String(64),unique=True,nullable=False)

    def __init__(self,name,email,username,password):
        self.name = name
        self.email = email
        self.username = username
        self.password = password

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/signup",methods=["POST",'GET'])
@cross_origin(allow_headers=['Content-Type'])
def signup():
    if request.method == "POST":
        requestJson = request.get_json(force=True)
        requestJson = requestJson['formdata']
        print("Hello")
        # print(requestJson['formdata']['name'])
        # print(request.form)
        name = requestJson["name"]
        email = requestJson["email"]
        username = requestJson["username"]
        password = requestJson["password"]
        print(name)
        newUser = users(name,email,username,password)
        db.session.add(newUser)
        db.session.commit()
        response = jsonify({'user':name,'email':email})
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        response.headers.add('Access-Control-Allow-Methods', "*")
        response.headers.add("content-type","application/json")
        return response
    else:
        return jsonify({"hello":"world"})

# @app.route("/login",methods=["POST","GET"])
# def login():
#     if request.method=="POST":
#         user = request.form["username"]
#         found_user = users.query.filter_by(username=user).first()
#         print(found_user)
#         if found_user:
#             session["user"] = user
#             return redirect(url_for("landing"))
#         else:
#             return redirect(url_for("signup"))
#     else:
#         if "user" in session:
#             return redirect(url_for("landing"))
#         return render_template("login.html")

# @app.route("/landing")
# def landing():
#     if "user" not in session:
#         return redirect(url_for("signup"))
#     return render_template("landing.html")


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True) 