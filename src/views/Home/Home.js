import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Converter from "../../components/Converter/Converter";
import "./Home.css";
import { getLatest } from "../../services/Network";
import ConvertedToBox from "../../components/ConvertedToBox/ConvertedToBox";
import { Col, Row } from "antd";
function Home() {
	const [fromCurrency, updateFromCurrency] = useState(null);
	const [ratesList, updateRatesList] = useState([]);
	const [ratesObject, updateRatesObject] = useState(null);
	useEffect(() => {
		if (fromCurrency) {
			let data = {
				API_KEY: process.env.REACT_APP_API_KEY,
				base: fromCurrency,
				symbols: [
					"EGP",
					"USD",
					"EUR",
					"AED",
					"RMB",
					"GBP",
					"JPY",
					"AUD",
					"CAD",
				],
			};
			getLatest(
				data,
				(success) => {
					updateRatesList(Object.keys(success.rates));
					updateRatesObject(success.rates);
				},
				(fail) => {
					console.log(fail);
				}
			);
		}
	}, [fromCurrency]);

	//A Callback Function to get the from currency from the Converter component
	const getFromCurrency = (value) => {
		updateFromCurrency(value);
	};
	return (
		<div className="Home">
			<Navbar />
			<Converter getFromCurrency={getFromCurrency} />
			<Row>
				{ratesList.map((rate) => {
					return (
						<Col xs={12} md={8}>
							<ConvertedToBox
								from={fromCurrency}
								to={rate}
								rate={ratesObject[rate]}
							/>
						</Col>
					);
				})}
			</Row>
		</div>
	);
}

export default Home;
