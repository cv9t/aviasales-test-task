import React, { FC } from "react";
import TabItem from "../TabItem/TabItem";
import cl from "./Tabs.module.scss";

const Tabs: FC = () => {
	const Tabs = [
		{
			name: "bestFor",
			title: "Самый дешевый",
			value: "cheap",
		},
		{
			name: "bestFor",
			title: "Самый быстрый",
			value: "fast",
		},
		{
			name: "bestFor",
			title: "Оптимальный",
			value: "balanced",
		},
	];

	return (
		<div className={cl.tabs}>
			{Tabs.map((item) => (
				<TabItem key={item.value} item={item} />
			))}
		</div>
	);
};

export default Tabs;
