import React from "react";
import { ITicket } from "../../types/types";
import Filter from "../Filter/Filter";
import Ticket from "../Ticket/Ticket";
import List from "../List";
import cl from "./FilteredTicketPage.module.scss";
import Tabs from "../Tabs/Tabs";

const FilteredTicketPage = () => {
	return (
		<div className={cl.filteredTicketPage}>
			<Filter title="Количество пересадок" />
			<div className={cl.filteredTicketPage__container}>
				<Tabs />
				{/*<List
					items={tickets}
					renderItem={(ticket: ITicket) => <Ticket />}
				/>*/}
			</div>
		</div>
	);
};

export default FilteredTicketPage;
