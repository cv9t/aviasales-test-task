import React, { FC } from "react";
import { IFilterItem } from "../../types/types";
import cl from "./FilterItem.module.scss";

interface FilterItemProps {
	item: IFilterItem;
}

const FilterItem: FC<FilterItemProps> = ({ item }) => {
	return (
		<label className={cl.filterItem}>
			<input
				type="checkbox"
				value={item.filterType}
				className={cl.filterItem__chx}
			/>
			<div className={cl.filterItem__title}>{item.title}</div>
		</label>
	);
};

export default FilterItem;
