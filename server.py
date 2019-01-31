from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
import random, string
from json import loads, dumps
import os
app = Flask(__name__)
CORS(app)
api = Api(app)

class test_dict_data:
  def __init__(self):
    self.data = self.__db_open()

  def push(self, data):
    if self.__is_id(data["id"]): return {"message": "this id is aleady used"}
    data["obj_num"] = self.__randomname()
    self.data.append(data)
    self.__db_save(self.data)
    return self.data

  def __is_id(self, user_id):
        return any(list(map(lambda x:x["id"] == user_id, self.data)))

  def __randomname(self,n=10):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=n))

  def __db_save(self, json):
    with open("test.json", "w") as f:
      f.write(dumps(json))

  def __db_open(self):
    if not(os.path.isfile("test.json")): return list()
    with open("test.json", "r") as f:
      data = f.read()
    return loads(data)

test = test_dict_data()

class testdb(Resource):
  parser = reqparse.RequestParser()
  parser.add_argument('id')
  parser.add_argument('pass')
  def get(self):
    return test.data
  def post(self):
    args = self.parser.parse_args()
    print(args["id"], args["pass"])
    return test.push(args)

api.add_resource(testdb, "/")

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
