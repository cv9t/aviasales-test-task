import React, { FC } from "react";
import { IFilterItem } from "../../types/types";
import FilterItem from "../FilterItem/FilterItem";
import cl from "./Filter.module.scss";

interface FilterProps {
	title: string;
}

const Filter: FC<FilterProps> = ({ title }) => {
	const filterItems: IFilterItem[] = [
		{
			title: "Все",
			filterType: "-1",
		},
		{
			title: "Без пересадок",
			filterType: "0",
		},
		{
			title: "1 пересадка",
			filterType: "1",
		},
		{
			title: "2 пересадки",
			filterType: "2",
		},
		{
			title: "3 пересадки",
			filterType: "3",
		},
	];

	return (
		<div className={cl.filter}>
			<div className={cl.filter__title}>{title}</div>
			{filterItems.map((item) => (
				<FilterItem item={item} key={item.filterType} />
			))}
		</div>
	);
};

export default Filter;
