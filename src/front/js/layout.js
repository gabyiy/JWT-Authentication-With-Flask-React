import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { CharacterDetails } from "./pages/singleCharacter.jsx";
import { PlanetsDetails } from "./pages/singlePlanet.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Login from "./pages/login";
import Register from "./pages/register";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Login />
						</Route>
						<Route exact path="/sign-up">
							<Register />
						</Route>
						<Route exact path="/private">
							<Home />
						</Route>
						<Route exact path="/chardetails/:thename" component={CharacterDetails} />
						<Route exact path="/pladetails/:thename" component={PlanetsDetails} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
