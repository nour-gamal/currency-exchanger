import React from "react";
import Logo from "../../assets/icons/compass-logo.svg";
import "./Navbar.css";
function Navbar() {
	return (
		<nav className="navbar-container">
			{/* Logo figure */}
			<figure className="logo-container">
				<img src={Logo} alt="logo" />
			</figure>

			{/* Navbar links to navigate to conversions views */}
			<ul className="links-list">
				<li>EUR-USD Details</li>
				<li>EUR-GBP Details</li>
			</ul>
		</nav>
	);
}

export default Navbar;
