import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Converter from "../../components/Converter/Converter";
import Navbar from "../../components/Navbar/Navbar";

function Details() {
	const [fromCurrency, updateFromCurrency] = useState(null);
	const [toCurrency, updateToCurrency] = useState(null);
	let location = useLocation();
	useEffect(() => {
		updateFromCurrency(location.state.from);
		updateToCurrency(location.state.to);
	}, [location.state.to, location.state.from]);

	return (
		<div>
			<Navbar />
			<Converter />
		</div>
	);
}

export default Details;
