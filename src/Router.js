import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./views/Details/Details";
import Home from "./views/Home/Home";
function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/details" element={<Details />} />
		</Routes>
	);
}

export default Router;
