import React from "react";
import Filter from "./components/Filter/Filter";
import AviaSalesLogo from "./assets/svg/logo.svg";
import { ReactSVG } from "react-svg";
import "./styles/App.scss";

function App() {
	return (
		<div className="App">
			<ReactSVG
				src={AviaSalesLogo}
				beforeInjection={(svg) => {
					svg.classList.add("logo");
				}}
			/>
			<Filter title="Количество пересадок" />
		</div>
	);
}

export default App;
