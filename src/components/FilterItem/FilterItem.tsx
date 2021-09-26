import React, { FC, ChangeEvent } from "react";
import { IFilterItem } from "../../types/types";
import cl from "./FilterItem.module.scss";

interface FilterItemProps {
	item: IFilterItem;
	onFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FilterItem: FC<FilterItemProps> = ({ item, onFilterChange }) => {
	return (
		<label className={cl.filterItem}>
			<input
				type="checkbox"
				checked={item.checked}
				className={cl.filterItem__chx}
				onChange={onFilterChange}
			/>
			<div className={cl.filterItem__title}>{item.title}</div>
		</label>
	);
};

export default FilterItem;
