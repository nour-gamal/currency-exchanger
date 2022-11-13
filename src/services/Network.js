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
	const { base } = data;
	const path = `/fixer/latest?base=${base}`;
	getResource(path, success, fail);
};
