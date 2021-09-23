export interface IFilterItem {
	title: string;
	value: string;
}

export interface ITabItem {
	name: string;
	title: string;
	value: string;
}

export interface ITicket {
	price: number;
	carrier: string;
	segments: [
		{
			origin: string;
			destination: string;
			date: string;
			stops: string[];
			duration: number;
		},
		{
			origin: string;
			destination: string;
			date: string;
			stops: string[];
			duration: number;
		},
	];
}
