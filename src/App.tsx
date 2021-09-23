import React from "react";
import Filter from "./components/Filter/Filter";
import AviaSalesLogo from "./assets/svg/logo.svg";
import { ReactSVG } from "react-svg";
import "./styles/App.scss";
import Tabs from "./components/Tabs/Tabs";

function App() {
	return (
		<div className="App">
			<ReactSVG
				src={AviaSalesLogo}
				beforeInjection={(svg) => {
					svg.classList.add("logo");
				}}
			/>
			<div
				style={{
					maxWidth: "760px",
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
				}}>
				<Filter title="Количество пересадок" />
				<Tabs />
			</div>
		</div>
	);
}

export default App;
