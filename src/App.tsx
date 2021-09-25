import React from "react";
import AviaSalesLogo from "./assets/svg/logo.svg";
import { ReactSVG } from "react-svg";
import "./styles/App.scss";
import TicketPage from "./pages/TicketPage/TicketPage";

function App() {
	return (
		<div className="App">
			<ReactSVG
				src={AviaSalesLogo}
				beforeInjection={(svg) => {
					svg.classList.add("logo");
				}}
			/>
			<TicketPage />
		</div>
	);
}

export default App;
