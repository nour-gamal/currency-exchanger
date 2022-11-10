import Router from "./Router";
import { ToastContainer } from "react-toastify";
import "antd/dist/antd.min.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router />
			<ToastContainer />
		</div>
	);
}

export default App;
