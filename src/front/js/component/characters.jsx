import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const Characters = props => {
	const { store, actions } = useContext(Context);
	let heart = store.favorites.find((value, index) => {
		return value == props.character.name;
	});
	return (
		<div className="card m-3 bg-light">
			<img className="card-img-top" src="https://dummyimage.com/400x200/cccccc/ffffff.jpg" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.character.name}</h5>
				<p className="card-text">
					Gender: {props.character.gender} <br />
					Hair Color: {props.character.hair_color} <br />
					Eye-Color: {props.character.eye_color}
				</p>
				<div className="d-flex justify-content-between">
					<Link to={{ pathname: `/chardetails/${props.character.name}`, state: props.character }}>
						<button href="#" className="btn btn-outline-primary">
							Learn More!
						</button>
					</Link>
					<button
						href="#"
						className="btn btn-outline-warning"
						onClick={() =>
							heart == undefined ? props.addFav(props.character.name) : props.delFav(props.character.name)
						}>
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};
Characters.propTypes = {
	character: PropTypes.json,
	addFav: PropTypes.func,
	delFav: PropTypes.func
};
