import { getResource } from "./Services";

//APIS
export const convertFromTo = (data, success, fail) => {
	const { from, to, amount } = data;
	const path = `/fixer/convert?to=${to}&from=${from}&amount=${amount}`;
	getResource(path, success, fail);
};
