import React from "react";
import AviaSalesLogo from "./assets/svg/logo.svg";
import { ReactSVG } from "react-svg";
import "./styles/App.scss";
import FilteredTicketPage from "./pages/FilteredTicketPage/FilteredTicketPage";

function App() {
	return (
		<div className="App">
			<ReactSVG
				src={AviaSalesLogo}
				beforeInjection={(svg) => {
					svg.classList.add("logo");
				}}
			/>
			<FilteredTicketPage />
		</div>
	);
}

export default App;
