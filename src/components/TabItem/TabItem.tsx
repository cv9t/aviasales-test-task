import React, { FC } from "react";
import { ITabItem } from "../../types/types";
import cl from "./TabItem.module.scss";

interface TabItemProps {
	item: ITabItem;
	onSortChange: (value: string) => void;
}

const TabItem: FC<TabItemProps> = ({ item, onSortChange }) => {
	return (
		<div className={cl.tabItem__wrapper}>
			<input
				type="radio"
				id={item.sortType}
				name={item.name}
				onClick={() => onSortChange(item.sortType)}
			/>
			<label className={cl.tabItem} htmlFor={item.sortType}>
				{item.title}
			</label>
		</div>
	);
};

export default TabItem;
