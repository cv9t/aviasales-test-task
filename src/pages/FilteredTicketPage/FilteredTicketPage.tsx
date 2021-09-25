import React, { useEffect, useState } from "react";
import { ITicket, ISearchId } from "../../types/types";
import Filter from "../../components/Filter/Filter";
import Ticket from "../../components/Ticket/Ticket";
import List from "../../components/List";
import cl from "./FilteredTicketPage.module.scss";
import Tabs from "../../components/Tabs/Tabs";
import axios from "axios";

const FilteredTicketPage = () => {
	const [tickets, setTickets] = useState<ITicket[]>([]);

	async function fetchSearchId() {
		const {
			data: { searchId },
		} = await axios.get<ISearchId>(
			"https://front-test.beta.aviasales.ru/search",
		);

		let result: ITicket[] = [];

		while (true) {
			try {
				const {
					data: { tickets, stop },
				}: {
					data: {
						tickets: ITicket[];
						stop: boolean;
					};
				} = await axios.get(
					"https://front-test.beta.aviasales.ru/tickets",
					{
						params: { searchId },
					},
				);

				result = [...tickets];

				if (stop) {
					console.log(searchId);
					break;
				}
			} catch (error) {}
		}

		setTickets(result.filter((t, i) => i < 20));
	}

	useEffect(() => {
		fetchSearchId();
	}, []);

	return (
		<div className={cl.filteredTicketPage}>
			<Filter title="Количество пересадок" />
			<div className={cl.filteredTicketPage__container}>
				<Tabs />
				<List
					items={tickets}
					renderItem={(ticket: ITicket, index) => (
						<Ticket item={ticket} key={`ticket-${index}`} />
					)}
				/>
			</div>
		</div>
	);
};

export default FilteredTicketPage;
