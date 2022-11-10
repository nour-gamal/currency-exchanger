import { Col, Input, Select, Row } from "antd";
import React, { useEffect, useState } from "react";
import { convertFromTo } from "../../services/Network";
import "./Converter.css";

function Converter() {
	const [amount, updateAmount] = useState(1);
	const [fromCurrency, updateFromCurrency] = useState(null);
	const [toCurrency, updateToCurrency] = useState(null);

	const handleChange = (e) => {
		const fieldName = e.target.id;
		const value = e.target.value;
		switch (fieldName) {
			case "amount": {
				if (/^[0-9]/.test(value)) updateAmount(value);
				break;
			}
			default: {
				break;
			}
		}
	};
	useEffect(() => {
		const data = {
			from: fromCurrency,
			to: toCurrency,
			amount,
		};
		convertFromTo(
			data,
			(success) => {},
			(fail) => {}
		);
	}, []);

	const currencyOptions = [
		{
			value: "jack",
			label: "Jack",
		},
		{
			value: "lucy",
			label: "Lucy",
		},
		{
			value: "disabled",
			disabled: true,
			label: "Disabled",
		},
		{
			value: "Yiminghe",
			label: "yiminghe",
		},
	];
	return (
		<div className="converter">
			<h1 className="main-title">Currency Exchanger</h1>
			<Row>
				{/* Currency Input Section */}
				<Col md={8}>
					<label className="input-label">Amount</label>
					<Input
						type="number"
						className="amount-field"
						value={amount}
						onChange={handleChange}
						id="amount"
					/>
				</Col>
				{/* Conversion Proccess Section */}
				<Col md={16}>
					<label className="input-label">From</label>
					<Select
						defaultValue="lucy"
						style={{
							width: 120,
						}}
						onChange={handleChange}
						options={currencyOptions}
					/>
				</Col>
			</Row>
		</div>
	);
}

export default Converter;
