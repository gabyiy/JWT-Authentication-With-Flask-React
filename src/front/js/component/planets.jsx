import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const Planets = props => {
	const { store, actions } = useContext(Context);
	let heart = store.favorites.find((value, index) => {
		return value == props.planet.name;
	});
	return (
		<div className="card m-3 bg-light">
			<img className="card-img-top" src="https://dummyimage.com/400x200/cccccc/ffffff.jpg" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.planet.name}</h5>
				<p className="card-text">
					Terrain: {props.planet.terrain} <br />
					Population: {props.planet.population}
				</p>
				<div className="d-flex justify-content-between">
					<Link to={{ pathname: `/pladetails/${props.planet.name}`, state: props.planet }}>
						<span href="#" className="btn btn-outline-primary">
							Learn More!
						</span>
					</Link>
					<button
						href="#"
						className="btn btn-outline-warning"
						onClick={() =>
							heart == undefined ? props.addFav(props.planet.name) : props.delFav(props.planet.name)
						}>
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};
Planets.propTypes = {
	planet: PropTypes.json,
	addFav: PropTypes.func,
	delFav: PropTypes.func
};
