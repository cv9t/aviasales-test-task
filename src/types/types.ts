export interface IFilterItem {
	title: string;
	filterType: string;
	checked: boolean;
}

export interface IFilter {
	chx: string[];
	sort: string;
}

export interface ITabItem {
	name: string;
	title: string;
	sortType: string;
}

export interface ITicketSegment {
	origin: string;
	destination: string;
	date: string;
	stops: string[];
	duration: number;
}

export interface ITicket {
	price: number;
	carrier: string;
	segments: [ITicketSegment, ITicketSegment];
}

export interface ISearchId {
	searchId: string;
}
