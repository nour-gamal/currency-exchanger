import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Converter from "../../components/Converter/Converter";
import "./Home.css";
function Home() {
	return (
		<div className="Home">
			<Navbar />
			<Converter />
		</div>
	);
}

export default Home;
