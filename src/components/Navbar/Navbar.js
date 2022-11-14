import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/compass-logo.svg";
import "./Navbar.css";
function Navbar() {
	return (
		<nav className="navbar-container">
			{/* Logo figure */}
			<figure className="logo-container">
				<Link to="/">
					<img src={Logo} alt="logo" />
				</Link>
			</figure>

			{/* Navbar links to navigate to conversions views */}
			<ul className="links-list">
				<li>
					<Link
						to={"/details"}
						state={{
							from: "EUR",
							to: "USD",
						}}>
						EUR-USD Details
					</Link>
				</li>
				<li>
					<Link
						to={"/details"}
						state={{
							from: "EUR",
							to: "GBP",
						}}>
						EUR-GBP Details
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
