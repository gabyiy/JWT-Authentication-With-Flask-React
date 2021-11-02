import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Register = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(
		() => {
			if (store.isAuthenticate) {
				history.push("/private");
			}
		},
		[store.isAuthenticate]
	);
	return (
		<div className="principal-container text-center">
			<div className="myform">
				<form>
					<h4>Sing Up!</h4>
					<div className="form-group">
						<label>Email address</label>
						<input
							type="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							className="form-control"
							placeholder="Your email here!"
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							className="form-control"
							placeholder="Your password"
						/>
					</div>
					<button
						onClick={() => actions.sig_up(email, password)}
						type="submit"
						className="btn btn-primary btn-block">
						Submit
					</button>
					Are you already registered? <Link to={"/"}>Log in!</Link>{" "}
				</form>
			</div>
		</div>
	);
};

export default Register;
