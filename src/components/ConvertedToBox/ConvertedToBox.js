import React from "react";
import "./ConvertedToBox.css";
function ConvertedToBox({ from, to, rate }) {
	return (
		<div className="converterToBox">
			<div>
				{from}/{to}
			</div>
			<div>{rate}</div>
		</div>
	);
}

export default ConvertedToBox;
