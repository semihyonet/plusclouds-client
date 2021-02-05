import React from "react";
import styles from "./style.module.css";

import { ReactComponent as Logo } from "../../assets/logo-text.svg";

import SideMenu from "../SideMenu";

const SideBar = () => {
	return (
		<div className={styles.sideBar}>
			<div className={styles.logoContainer}>
				<Logo />
			</div>
			<div className={styles.text}>Hesabım</div>

			<SideMenu />
		</div>
	);
};

export default SideBar;
