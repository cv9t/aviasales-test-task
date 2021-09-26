import { useMemo } from "react";
import { ITicket, ITicketSegment } from "../types/types";

export const useSortedTickets = (
	tickets: ITicket[],
	sort: string,
): ITicket[] => {
	const countDuration = (segments: ITicketSegment[]) =>
		segments.reduce((sum, { duration }) => sum + duration, 0);
	const sortSegments = (
		{ segments: s1 }: { segments: ITicketSegment[] },
		{ segments: s2 }: { segments: ITicketSegment[] },
	) => countDuration(s1) - countDuration(s2);

	const sortedTickets = useMemo(() => {
		if (sort === "cheap") {
			return [...tickets].sort((a, b) => a.price - b.price);
		}
		if (sort === "fast") {
			return [...tickets].sort(sortSegments);
		}
		if (sort === "balanced") {
			return [...tickets].sort(
				(a, b) => sortSegments(a, b) && a.price - b.price,
			);
		}
		return tickets;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sort, tickets]);

	return sortedTickets;
};

export const useTickets = (
	tickets: ITicket[],
	sort: string,
	filters: string[],
): ITicket[] => {
	const sortedTickets: ITicket[] = useSortedTickets(tickets, sort);

	const sortedAndFilteredTickets: ITicket[] = useMemo(() => {
		if (filters.length === 0 || filters.includes("-1")) {
			return sortedTickets;
		}
		return sortedTickets.filter(({ segments }) =>
			segments.every(({ stops }) =>
				filters.includes(String(stops.length)),
			),
		);
	}, [filters, sortedTickets]);

	return sortedAndFilteredTickets;
};
