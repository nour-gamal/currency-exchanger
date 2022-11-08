import Router from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.less";
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
