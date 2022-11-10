import axios from "axios";
import { toastError, toastSuccess } from "../helpers/Toasters";

//Declarations
const baseUrl = process.env.REACT_APP_BASE_URL;
const apikey = process.env.REACT_APP_API_KEY;

export function getResource(path, onSuccess, onFail) {
	let requestData = {
		method: "get",
		url: baseUrl + path,
		headers: { apikey },
	};

	axios(requestData).then(
		(res) => {
			onSuccess(res.data);
		},
		(fail) => {
			onFail(fail.response);
			toastError(fail.response.data.message);
			if (fail.response.status === 401) {
				window.open("/logout", "_self");
			}
		}
	);
}

export function postResource(path, data, onSuccess, onFail, multiPart = false) {
	let requestData = {
		method: "post",
		url: baseUrl + path,
		headers: { apikey },
		data,
	};

	if (multiPart) {
		requestData.headers = {
			...requestData.headers,
			"content-type": "multipart/form-data",
		};
	}

	axios(requestData).then(
		(res) => {
			if (!res.data.success) {
				toastError(res.data.message);
			}
			onSuccess(res.data);
		},
		(fail) => {
			onFail(fail.response);
			toastError(fail.response.data.message);
			if (fail.response.status === 401) {
				window.open("/logout", "_self");
			}
		}
	);
}

export function deleteResource(path, data, onSuccess, onFail) {
	let requestData = {
		method: "delete",
		url: baseUrl + path,
		headers: { apikey },
		data,
	};

	axios(requestData).then(
		(res) => {
			if (!res.data.success) {
				toastError(res.data.message);
			}
			onSuccess(res.data);
		},
		(fail) => {
			onFail(fail.response);
			toastError(fail.response.data.message);
			if (fail.response.status === 401) {
				window.open("/logout", "_self");
			}
		}
	);
}

export function patchResource(
	path,
	data,
	onSuccess,
	onFail,
	multipart = false
) {
	let requestData = {
		method: "patch",
		url: baseUrl + path,
		headers: { apikey },
		data,
	};

	if (multipart) {
		requestData.headers = {
			...requestData.headers,
			"content-type": "multipart/form-data",
		};
	}

	axios(requestData).then(
		(res) => {
			if (!res.data.success) {
				toastError(res.data.message);
			}
			onSuccess(res.data);
		},
		(fail) => {
			onFail(fail.response);
			toastError(fail.response.data.message);
			if (fail.response.status === 401) {
				window.open("/logout", "_self");
			}
		}
	);
}
export function putResource(path, data, onSuccess, onFail, multipart = false) {
	let requestData = {
		method: "put",
		url: baseUrl + path,
		headers: { apikey },
		data,
	};
	if (multipart) {
		requestData.headers = {
			...requestData.headers,
			"content-type": "multipart/form-data",
		};
	}

	axios(requestData).then(
		(res) => {
			if (!res.data.success) {
				toastError(res.data.message);
			} else {
				toastSuccess(res.data.message);
			}
			onSuccess(res.data);
		},
		(fail) => {
			onFail(fail.response);
			toastError(fail.response.data.message);
			if (fail.response.status === 401) {
				window.open("/logout", "_self");
			}
		}
	);
}
