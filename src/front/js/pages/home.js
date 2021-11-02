import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters.jsx";
import { Planets } from "../component/planets.jsx";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home container-fluid">
			<div>
				<h1 className="title">Characters</h1>
				<div className="container-cards">
					{store.character.map((value, index) => {
						return (
							<Characters key={index} character={value} addFav={actions.addFav} delFav={actions.delFav} />
						);
					})}
				</div>
			</div>
			<div>
				<h1 className="title">Planets</h1>
				<div className="container-cards">
					{store.planet.map((value, index) => {
						return <Planets key={index} planet={value} addFav={actions.addFav} delFav={actions.delFav} />;
					})}
				</div>
			</div>
		</div>
	);
};
