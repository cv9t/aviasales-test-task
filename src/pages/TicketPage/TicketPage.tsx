import React, { useEffect, useState } from "react";
import { ITicket, ISearchId, IFilter } from "../../types/types";
import Filter from "../../components/Filter/Filter";
import Ticket from "../../components/Ticket/Ticket";
import List from "../../components/List";
import cl from "./TicketPage.module.scss";
import Tabs from "../../components/Tabs/Tabs";
import axios from "axios";
import { useTickets } from "../../hooks/useTickets";
import MyButton from "../../components/UI/button/MyButton";
import Loader from "../../components/UI/Loader/Loader";

const TicketPage = () => {
	const [tickets, setTickets] = useState<ITicket[]>([]);
	const [filter, setFilter] = useState<IFilter>({ chx: [], sort: "" });
	const [ticketsLimit, setTicketsLimit] = useState<number>(5);
	const [isTicketsLoading, setIsTicketsLoading] = useState<boolean>(false);
	const sortedAndFilteredTickets: ITicket[] = useTickets(
		tickets,
		filter.sort,
		filter.chx,
	);

	async function fetchSearchId() {
		const {
			data: { searchId },
		} = await axios.get<ISearchId>(
			"https://front-test.beta.aviasales.ru/search",
		);

		let allTickets: ITicket[] = [];

		setIsTicketsLoading(true);
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

				allTickets = [...tickets];

				if (stop) {
					break;
				}
			} catch (error) {}
		}
		setIsTicketsLoading(false);

		setTickets([...allTickets]);
	}

	useEffect(() => {
		setTicketsLimit(5);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filter]);

	useEffect(() => {
		fetchSearchId();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={cl.TicketPage}>
			<Filter
				title="Количество пересадок"
				filter={filter}
				onFilterChange={setFilter}
			/>
			<div className={cl.TicketPage__container}>
				<Tabs filter={filter} onSortChange={setFilter} />
				{isTicketsLoading && <Loader />}
				<List
					items={sortedAndFilteredTickets.filter(
						(i, index) => index < ticketsLimit,
					)}
					renderItem={(ticket: ITicket, index) => (
						<Ticket item={ticket} key={`ticket-${index}`} />
					)}
				/>
				{ticketsLimit <= sortedAndFilteredTickets.length && (
					<MyButton onClick={() => setTicketsLimit(ticketsLimit + 5)}>
						показать еще 5 билетов!
					</MyButton>
				)}
			</div>
		</div>
	);
};

export default TicketPage;
