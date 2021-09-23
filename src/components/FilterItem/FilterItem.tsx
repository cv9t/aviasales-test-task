import React, { FC } from "react";
import { IFilterItem } from "../../types/types";

interface FilterItemProps {
	item: IFilterItem;
}

const FilterItem: FC<FilterItemProps> = ({ item }) => {
	return (
		<div className="filterItem">
			<input type="checkbox" value={item.value} />
			<div className="filterItem__title">{item.title}</div>
		</div>
	);
};

export default FilterItem;
