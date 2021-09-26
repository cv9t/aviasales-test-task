import React, { FC } from "react";
import cl from "./MyButton.module.scss";

interface MyButtonProps {
	children: React.ReactNode;
	onClick: () => void;
}

const MyButton: FC<MyButtonProps> = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className={cl.myBtn}>
			{children}
		</button>
	);
};

export default MyButton;
