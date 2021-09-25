import React, { useEffect, useState } from "react";
import { ITicket, ISearchId } from "../../types/types";
import Filter from "../../components/Filter/Filter";
import Ticket from "../../components/Ticket/Ticket";
import List from "../../components/List";
import cl from "./TicketPage.module.scss";
import Tabs from "../../components/Tabs/Tabs";
import axios from "axios";
import { useTickets } from "../../hooks/useTickets";

const TicketPage = () => {
	const [tickets, setTickets] = useState<ITicket[]>([]);
	const [filters, setFilters] = useState<string[]>([]);
	const [sort, setSort] = useState<string>("");
	const sortedAndFilteredTickets: ITicket[] = useTickets(
		tickets,
		sort,
		filters,
	);

	const sortTickets = (sort: string) => {
		setSort(sort);
	};

	const filterTicket = (filters: string[]) => {
		setFilters(filters);
	};

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

				if (stop) {
					result = [...tickets];
					break;
				}
			} catch (error) {}
		}

		setTickets(result);
	}

	useEffect(() => {
		fetchSearchId();
	}, []);

	return (
		<div className={cl.TicketPage}>
			<Filter
				title="Количество пересадок"
				onFilterChange={filterTicket}
			/>
			<div className={cl.TicketPage__container}>
				<Tabs onSortChange={sortTickets} />
				<List
					items={sortedAndFilteredTickets}
					renderItem={(ticket: ITicket, index) => (
						<Ticket item={ticket} key={`ticket-${index}`} />
					)}
				/>
			</div>
		</div>
	);
};

export default TicketPage;
