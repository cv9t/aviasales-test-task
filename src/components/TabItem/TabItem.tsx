import React, { FC } from "react";
import { ITabItem } from "../../types/types";
import cl from "./TabItem.module.scss";

interface TabItemProps {
	item: ITabItem;
}

const TabItem: FC<TabItemProps> = ({ item }) => {
	return (
		<div className={cl.tabItem__wrapper}>
			<input
				type="radio"
				id={item.sortType}
				value={item.sortType}
				name={item.name}
			/>
			<label className={cl.tabItem} htmlFor={item.sortType}>
				{item.title}
			</label>
		</div>
	);
};

export default TabItem;
