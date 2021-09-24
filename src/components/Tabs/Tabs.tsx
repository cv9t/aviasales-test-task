import React, { FC } from "react";
import TabItem from "../TabItem/TabItem";
import { ITabItem } from "../../types/types";
import cl from "./Tabs.module.scss";

const Tabs: FC = () => {
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
				<TabItem key={item.sortType} item={item} />
			))}
		</div>
	);
};

export default Tabs;
