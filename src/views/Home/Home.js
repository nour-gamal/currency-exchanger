import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Converter from "../Converter/Converter";
import "./Home.css";
function Home() {
	return (
		<div className="Home">
			<Navbar />
			<h1 className="main-title">Currency Exchanger</h1>
			<Converter />
		</div>
	);
}

export default Home;
