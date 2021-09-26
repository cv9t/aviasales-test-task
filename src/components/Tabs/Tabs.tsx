import React, { FC } from "react";
import TabItem from "../TabItem/TabItem";
import { IFilter, ITabItem } from "../../types/types";
import cl from "./Tabs.module.scss";

interface TabsProps {
	filter: IFilter;
	onSortChange: (filter: { chx: string[]; sort: string }) => void;
}

const Tabs: FC<TabsProps> = ({ onSortChange, filter }) => {
	const Tabs: ITabItem[] = [
		{
			name: "tabSort",
			title: "Самый дешевый",
			sortType: "cheap",
		},
		{
			name: "tabSort",
			title: "Самый быстрый",
			sortType: "fast",
		},
		{
			name: "tabSort",
			title: "Оптимальный",
			sortType: "balanced",
		},
	];

	return (
		<div className={cl.tabs}>
			{Tabs.map((item) => (
				<TabItem
					key={item.sortType}
					item={item}
					filter={filter}
					onSortChange={onSortChange}
				/>
			))}
		</div>
	);
};

export default Tabs;
