import React, { FC } from "react";
import ArrowUp from "../../../assets/svg/arrow-up.svg";
import cl from "./MyScroll.module.scss";
import { ReactSVG } from "react-svg";

interface MyScrollProps {
	isShow: boolean;
	onClick: () => void;
}

const MyScroll: FC<MyScrollProps> = ({ onClick, isShow }) => {
	return (
		<div
			className={
				isShow ? [cl.myScroll, cl.visible].join(" ") : cl.myScroll
			}>
			<ReactSVG src={ArrowUp} onClick={onClick} />
		</div>
	);
};

export default MyScroll;
