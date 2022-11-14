import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Chart } from "react-charts";
import { getCurrencyTimeseries } from "../../services/Network";

function CurrencyChart({ fromCurrency, toCurrency }) {
	const [chartData, updateChartData] = useState([]);
	useEffect(() => {
		if (fromCurrency && toCurrency) {
			let data = {
				end_date: moment().format("YYYY-MM-DD"),
				start_date: moment().subtract(1, "year").format("YYYY-MM-DD"),
				base: fromCurrency,
				symbols: [toCurrency],
			};
			getCurrencyTimeseries(
				data,
				(success) => {
					const chartsDataArr = convertRatesToChartData(success.rates);
					updateChartData(chartsDataArr);
				},
				(fail) => {
					console.log(fail);
				}
			);
		}
		// eslint-disable-next-line
	}, [fromCurrency, toCurrency]);
	const convertRatesToChartData = (ratesObject) => {
		const ratesKeys = Object.keys(ratesObject);
		let dataArr = [];

		ratesKeys.forEach((rateKey, index) => {
			const monthNumber = ratesKeys[index].split("-")[1];
			const nextLoopMonthNumber = ratesKeys[index + 1]?.split("-")[1];
			const isLastDay = monthNumber !== nextLoopMonthNumber;
			//Get the value of the last day of the month
			if (isLastDay) {
				dataArr.push([parseInt(monthNumber), ratesObject[rateKey][toCurrency]]);
			}
		});

		return dataArr;
	};
	console.log(chartData);
	const data = React.useMemo(
		() => [
			{
				label: "Series 1",
				data: chartData ? chartData : [],
			},
		],
		[chartData]
	);

	const axes = React.useMemo(
		() => [
			{ primary: true, type: "linear", position: "bottom" },
			{ type: "linear", position: "left" },
		],
		[]
	);

	return (
		<div className="my-4 d-flex justify-content-center">
			<div
				style={{
					width: "400px",
					height: "300px",
				}}>
				<Chart data={data} axes={axes} />
			</div>
		</div>
	);
}

export default CurrencyChart;
