import { Col, Input, Select, Row, Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import exchangeIcon from "../../assets/icons/exchange-arrow.svg";
import { convertFromTo, getSymbols } from "../../services/Network";
import "./Converter.css";

function Converter({ getFromCurrency }) {
	const [amount, updateAmount] = useState(null);
	const [currencyList, updateCurrencyList] = useState([]);
	const [fromCurrency, updateFromCurrency] = useState(null);
	const [toCurrency, updateToCurrency] = useState(null);
	const [conversionResult, updateConversionResult] = useState(null);
	const [unitRate, updateUnitRate] = useState(null);
	useEffect(() => {
		if (fromCurrency && toCurrency) {
			handleConvert(1);
			if (conversionResult) {
				handleConvert();
			}
		}
		// eslint-disable-next-line
	}, [fromCurrency, toCurrency]);
	const handleChange = (e) => {
		const fieldName = e.target.id;
		const value = e.target.value;
		switch (fieldName) {
			case "amount": {
				//If amount is from 1 to 9 only
				if (/^[1-9]/.test(value)) updateAmount(value);
				break;
			}
			case "fromCurrency": {
				updateFromCurrency(value);
				getFromCurrency(value);
				break;
			}
			case "toCurrency": {
				updateToCurrency(value);
				break;
			}
			default: {
				break;
			}
		}
	};
	const handleConvert = (unitAmount) => {
		const data = {
			from: fromCurrency,
			to: toCurrency,
			amount: unitAmount ? unitAmount : amount,
		};

		convertFromTo(
			data,
			(success) => {
				if (unitAmount) {
					updateUnitRate(success.result);
				} else {
					updateConversionResult(success.result);
				}
			},
			(fail) => {}
		);
	};
	useEffect(() => {
		getSymbols(
			(success) => {
				const symbolsArr = Object.keys(success.symbols);
				const symbolsOptions = [];
				symbolsArr.forEach((symbol) => {
					symbolsOptions.push({ value: symbol, label: symbol });
				});
				updateCurrencyList(symbolsOptions);
			},
			(fail) => {
				console.log(fail);
			}
		);
	}, []);
	const swapCurrency = () => {
		//Function to swap currencies
		let fromCurrencyVar = fromCurrency;
		let toCurrencyVar = toCurrency;
		updateFromCurrency(toCurrencyVar);
		updateToCurrency(fromCurrencyVar);
	};
	return (
		<div className="converter">
			<h1 className="main-title">Currency Exchanger</h1>
			<Row>
				{/* Currency Amount Section */}
				<Col md={8} xs={24} className="amount-section">
					<section>
						<label className="input-label">Amount</label>
						<Input
							type="number"
							className="amount-field text-center"
							value={amount}
							onChange={handleChange}
							id="amount"
							min={1}
						/>
					</section>
					{/* display only if from and to currencies ara exist */}
					{fromCurrency && toCurrency && (
						<section className="result-box">
							1.00 {fromCurrency} = {unitRate} {toCurrency}
						</section>
					)}
				</Col>
				{/* Conversion convert box section */}
				<Col md={16} xs={24} className="d-flex flex-1">
					<section className="convertbox-section">
						<div className="d-flex flex-1 align-items-end">
							<section className="input-section">
								<label className="input-label">From</label>
								<Select
									value={fromCurrency}
									disabled={!amount}
									showSearch
									onChange={(option) => {
										let e = {
											target: {
												id: "fromCurrency",
												value: option,
											},
										};
										handleChange(e);
									}}
									options={currencyList}
									id="fromCurrency"
									className="w-100"
									optionFilterProp="children"
									filterOption={(input, option) =>
										(option?.label ?? "")
											.toLowerCase()
											.includes(input.toLowerCase())
									}
								/>
							</section>
							<figure className="exchangeArrow-figure" onClick={swapCurrency}>
								<img src={exchangeIcon} alt="exchangeIcon" />
							</figure>
							<section className="input-section">
								<label className="input-label">To</label>
								<Select
									value={toCurrency}
									disabled={!amount}
									showSearch
									onChange={(option) => {
										let e = {
											target: {
												id: "toCurrency",
												value: option,
											},
										};
										handleChange(e);
									}}
									options={currencyList}
									id="toCurrency"
									optionFilterProp="children"
									filterOption={(input, option) =>
										(option?.label ?? "")
											.toLowerCase()
											.includes(input.toLowerCase())
									}
									className="w-100"
								/>
							</section>
						</div>
						<Button
							type="primary"
							className="w-100 convert-button"
							disabled={!fromCurrency || !toCurrency}
							onClick={() => {
								handleConvert();
							}}>
							Convert
						</Button>
						{conversionResult && (
							<div className="d-flex justify-content-around align-items-center">
								<div className="result-box">
									{conversionResult}
									{toCurrency}
								</div>
								<Link to="/">More Details</Link>
							</div>
						)}
					</section>
				</Col>
			</Row>
		</div>
	);
}

export default Converter;
