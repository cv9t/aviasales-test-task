import React, { useEffect } from "react";
import AviaSalesLogo from "./assets/svg/logo.svg";
import { ReactSVG } from "react-svg";
import "./styles/App.scss";
import FilteredTicketPage from "./pages/FilteredTicketPage/FilteredTicketPage";
import axios from "axios";
import { ISearchId, ITicket } from "./types/types";

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
