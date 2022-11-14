import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Converter from "../../components/Converter/Converter";
import CurrencyChart from "../../components/CurrencyChart/CurrencyChart";
import Navbar from "../../components/Navbar/Navbar";

function Details() {
	const [fromCurrency, updateFromCurrency] = useState(null);
	const [toCurrency, updateToCurrency] = useState(null);
	let location = useLocation();
	useEffect(() => {
		updateFromCurrency(location.state.from);
		updateToCurrency(location.state.to);
	}, [location.state.to, location.state.from]);
	const getFromCurrency = (value) => {
		updateFromCurrency(value);
	};
	const getToCurrency = (value) => {
		updateToCurrency(value);
	};

	return (
		<div>
			<Navbar />
			<Converter
				parent="details"
				fromCurrencyProp={fromCurrency}
				toCurrencyProp={toCurrency}
				getFromCurrency={getFromCurrency}
				getToCurrency={getToCurrency}
			/>
			<CurrencyChart fromCurrency={fromCurrency} toCurrency={toCurrency} />
		</div>
	);
}

export default Details;
