import React, { FC } from "react";
import cl from "./MyLogo.module.scss";

interface MyLogoProps {
	src: string;
	alt: string;
}

const MyLogo: FC<MyLogoProps> = ({ src, alt }) => {
	return <img className={cl.myLogo} src={src} alt={alt} />;
};

export default MyLogo;
