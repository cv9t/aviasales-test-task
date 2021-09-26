import React, { FC, useState, useEffect, ChangeEvent } from "react";
import FilterItem from "../FilterItem/FilterItem";
import cl from "./Filter.module.scss";
import { IFilterItem } from "../../types/types";

interface FilterProps {
	title: string;
	onFilterChange: (filters: string[]) => void;
}

const Filter: FC<FilterProps> = ({ title, onFilterChange }) => {
	const items: IFilterItem[] = [
		{
			title: "Все",
			filterType: "-1",
			checked: false,
		},
		{
			title: "Без пересадок",
			filterType: "0",
			checked: false,
		},
		{
			title: "1 пересадка",
			filterType: "1",
			checked: false,
		},
		{
			title: "2 пересадки",
			filterType: "2",
			checked: false,
		},
		{
			title: "3 пересадки",
			filterType: "3",
			checked: false,
		},
	];
	const [filterItems, setFilterItems] = useState([...items]);

	const handleFilterChange = (
		e: ChangeEvent<HTMLInputElement>,
		index: number,
	) => {
		const { checked } = e.target;
		const newCheckboxes = filterItems.map((item, i) =>
			i === index ? { ...item, checked } : item,
		);

		setFilterItems([...newCheckboxes]);
	};

	const setNewFilters = (filterItems: IFilterItem[]) => {
		const newFilters = filterItems
			.filter((item) => item.checked)
			.map((item) => item.filterType);

		onFilterChange([...newFilters]);
	};

	useEffect(() => {
		setNewFilters(filterItems);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterItems]);

	return (
		<div className={cl.filter}>
			<div className={cl.filter__title}>{title}</div>
			{filterItems.map((item, index) => (
				<FilterItem
					key={item.filterType}
					item={item}
					onFilterChange={(e) => handleFilterChange(e, index)}
				/>
			))}
		</div>
	);
};

export default Filter;
