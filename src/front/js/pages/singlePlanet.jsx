import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const PlanetsDetails = props => {
	return (
		<div className="container">
			<div className="d-flex">
				<img
					src="https://dummyimage.com/800x600/cccccc/ffffff.jpg"
					alt="Card image cap"
					className="singleImg"
				/>
				<div>
					<h1>{props.location.state.name}</h1>
					<h4>
						Sed posuere id dui at luctus. Aliquam erat volutpat. Aenean lacinia consequat faucibus. Aliquam
						sodales ac sem vitae aliquet. Cras eleifend tristique feugiat. Maecenas feugiat luctus elit, et
						volutpat nisl. Integer neque felis, fringilla non pharetra at, placerat eu velit. Nullam non
						bibendum urna.
					</h4>
				</div>
			</div>
			<hr className="line" />

			<div className="d-flex  justify-content-between">
				<div className="text">
					<h3>Climate</h3> <br /> <h6>{props.location.state.climate}</h6>
				</div>
				<div className="text">
					<h3>Diameter</h3> <br /> <h6>{props.location.state.diameter}</h6>
				</div>
				<div className="text">
					<h3>Population</h3> <br /> <h6>{props.location.state.population}</h6>
				</div>
				<div className="text">
					<h3>Terrain</h3> <br /> <h6>{props.location.state.terrain}</h6>
				</div>
				<div className="text">
					<h3>Gravity</h3> <br /> <h6>{props.location.state.gravity}</h6>
				</div>
			</div>
			<br />
		</div>
	);
};

PlanetsDetails.propTypes = {
	location: PropTypes.object
};
