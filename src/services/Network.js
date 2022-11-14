import { getResource } from "./Services";

//APIS
export const convertFromTo = (data, success, fail) => {
	const { from, to, amount } = data;
	const path = `/fixer/convert?to=${to}&from=${from}&amount=${amount}`;
	getResource(path, success, fail);
};

export const getSymbols = (success, fail) => {
	const path = `/fixer/symbols?`;
	getResource(path, success, fail);
};

export const getLatest = (data, success, fail) => {
	const { base, symbols } = data;
	const path = `/fixer/latest?base=${base}&symbols=${symbols}`;
	getResource(path, success, fail);
};
export const getCurrencyTimeseries = (data, success, fail) => {
	const { start_date, end_date, base, symbols } = data;
	const path = `/fixer/timeseries?base=${base}&start_date=${start_date}&end_date=${end_date}&symbols=${symbols}`;
	getResource(path, success, fail);
};
