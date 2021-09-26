import React, { FC } from "react";
import { ITabItem, IFilter } from "../../types/types";
import cl from "./TabItem.module.scss";

interface TabItemProps {
	item: ITabItem;
	filter: IFilter;
	onSortChange: (filter: { chx: string[]; sort: string }) => void;
}

const TabItem: FC<TabItemProps> = ({ item, onSortChange, filter }) => {
	return (
		<div className={cl.tabItem__wrapper}>
			<input
				type="radio"
				id={item.sortType}
				name={item.name}
				onClick={() => onSortChange({ ...filter, sort: item.sortType })}
			/>
			<label className={cl.tabItem} htmlFor={item.sortType}>
				{item.title}
			</label>
		</div>
	);
};

export default TabItem;
