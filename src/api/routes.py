"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, People, Planet, Favorite
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity


api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def sign_in():
    body = request.get_json()
    if body is None:
        return jsonify({"error": "Body is empty or null"}), 400

    email = body['email']
    password = body['password']

    user = User.query.filter_by(email=email, password=password).first()
    if User is None:
        return jsonify({"msg": "Email or password is wrong"}), 401
    
    token = create_access_token(identity=user.id)
    print(token)
    return jsonify({"token": token}), 200
    

@api.route('/sign-up', methods = ['POST'])
def create_user(email, password):
    body = request.get_json()
    if body is None:
        return {"error": "The body is null or undefined"}, 400
     
    User.create_user(body['email'], body['password'])
    return jsonify({"msg": "user created"}), 200

@api.route('/user', methods=['GET'])
@jwt_required()
def get_user(email):

    user = User.get_user(email)
    if user is None:
        return jsonify({"msg":"no user found"})

    return jsonify(user), 200

@api.route('/people', methods=['GET'])
@jwt_required()
def get_all_people():
    all_people = People.get_all_people()

    return jsonify(all_people), 200

@api.route('/people/<int:id>', methods = ['GET'])
@jwt_required()
def get_people(id):
    people= People.get_people(id)
    if people is None:
        return jsonify({"msg":"This planet is too far away"})
    return jsonify(people),200

@api.route('/people', methods=['POST'])
@jwt_required()
def create_people():
    body = request.get_json()
    if body is None:
        return {"error": "The body is null or undefined"}, 400
    
    people = People.create_people(body['name'], body['birth_year'], body['gender'], body['height'], body['mass'], body['hair_color'], body['skin_color'], body['eye_color'] )
    
    return {"message": "people created"}, 200

@api.route('/people', methods=['DELETE'])
@jwt_required()
def delete_people(id):
    people = People.delete_people(id)
    return jsonify(people),200

@api.route('/planet', methods=['GET'])
@jwt_required()
def get_all_planets():
    planets = Planet.get_all_planets()

    return jsonify(planets), 200

@api.route('/planet/<int:id>', methods=['GET'])
@jwt_required()
def get_planet(id):
    planet = Planet.get_planet(id)

    return jsonify(planet), 200

@api.route('/planet', methods=['POST'])
@jwt_required()
def create_planet():
    body = request.get_json()
    if body is None:
        return {"error": "The body is null or undefined"}, 400
    
    planet = Planet.create_planet(body['name'], body['rotation_period'], body['orbital_period'], body['diameter'], body['climate'],body['gravity'], body['terrain'], body['surface_water'], body['population']  )
   
    return {"message": "planet created"}, 200

@api.route('/favorite/people/<int:people_id>', methods=['POST'])
@jwt_required()
def create_favorite_people():
    body = request.get_json()
    if body is None:
        return {"error": "Body is empty or null"}, 400
    
    new_people = User.get_user(body['new_people'])
    people_id = new_people.id

    people = people.get_people(new_people.id)
    people_id = people.id

    Favorite.create_favorite(user_id, people_id)

    return {"message": "Favorite people created OK"}, 200
    
@api.route('/favorite/planet/<int:planet_id>', methods=['POST'])
@jwt_required()
def create_favorite_planet():
    body = request.get_json()
    if body is None:
        return {"error": "Body is empty or null"}, 400

    new_planet = User.get_user(body['new_planet'])
    planet_id = new_planet.id

    planet = Planet.get_planet(new_planet.id)
    planet_id = planet.id

    Favorite.create_favorite(user_id, planet_id)

    return {"message": "Favorite planet created OK"}, 200

@api.route('/favorite', methods=['GET'])
@jwt_required()
def get_all_favorites():
    favorites = Favorite.get_all_favorites()
    return jsonify(favorites), 200

@api.route('/favorite/<int:planet_id>', methods=['DELETE'])
@jwt_required()
def delete_favorite_planet(favorite_id,planet_id):
    favorite = Favorite.delete_favorite_planet(favorite_id,planet_id)
    return jsonify(favorites),200

@api.route('/favorite/<int:people_id>', methods=['DELETE'])
@jwt_required()
def delete_favorite_people(favorite_id,people_id):
    favorite = Favorite.delete_favorite_people(favorite_id,people_id)
    return jsonify(favorites),200


