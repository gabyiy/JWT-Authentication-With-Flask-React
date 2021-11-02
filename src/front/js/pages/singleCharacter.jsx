import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const CharacterDetails = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="d-flex">
				<img src="https://dummyimage.com/800x600/cccccc/ffffff.jpg" className="singleImg" />
				<div>
					<h1 className="singleTitle">{props.location.state.name}</h1>
					<h4 className="description">
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
					<h3>Birth Year</h3> <br /> <h6>{props.location.state.birth_year}</h6>
				</div>
				<div className="text">
					<h3>Eye Color</h3> <br /> <h6>{props.location.state.eye_color}</h6>
				</div>
				<div className="text">
					<h3>Gender</h3> <br /> <h6>{props.location.state.gender}</h6>
				</div>
				<div className="text">
					<h3>Hair Color</h3> <br /> <h6>{props.location.state.hair_color}</h6>
				</div>
				<div className="text">
					<h3>Height</h3> <br /> <h6>{props.location.state.height}</h6>
				</div>
			</div>
			<br />
		</div>
	);
};

CharacterDetails.propTypes = {
	location: PropTypes.object
};
