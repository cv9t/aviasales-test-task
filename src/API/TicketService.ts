import axios from "axios";
import { ITicket, ISearchId } from "../types/types";

export default class TicketService {
	static async getAll() {
		const {
			data: { searchId },
		} = await axios.get<ISearchId>(
			"https://front-test.beta.aviasales.ru/search",
		);

		let allTickets: ITicket[] = [];

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

		return allTickets;
	}
}
