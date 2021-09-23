import React, { FC } from "react";
import FilterItem from "../FilterItem/FilterItem";

interface FilterProps {
	title: string;
}

const Filter: FC<FilterProps> = ({ title }) => {
	const filterItems = [
		{
			title: "Все",
			value: "all",
		},
		{
			title: "Без пересадок",
			value: "0",
		},
		{
			title: "1 пересадка",
			value: "1",
		},
	];
	return (
		<div className="filter">
			<div className="filter__title">{title}</div>
			{filterItems.map((item) => (
				<FilterItem item={item} key={item.value} />
			))}
		</div>
	);
};

export default Filter;
