import React, { FC } from "react";
import FilterItem from "../FilterItem/FilterItem";
import cl from "./Filter.module.scss";

interface FilterProps {
	title: string;
}

const Filter: FC<FilterProps> = ({ title }) => {
	const filterItems = [
		{
			title: "Все",
			value: "-1",
		},
		{
			title: "Без пересадок",
			value: "0",
		},
		{
			title: "1 пересадка",
			value: "1",
		},
		{
			title: "2 пересадки",
			value: "2",
		},
		{
			title: "3 пересадки",
			value: "3",
		},
	];

	return (
		<div className={cl.filter}>
			<div className={cl.filter__title}>{title}</div>
			{filterItems.map((item) => (
				<FilterItem item={item} key={item.value} />
			))}
		</div>
	);
};

export default Filter;
