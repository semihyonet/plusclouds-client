import React from "react";
import styles from "./style.module.css";
import { ReactComponent as Logo } from "../../assets/logo-text.svg";

const HeaderAuth = () => {
	return (
		<div className={styles.container}>
			<div style={{ marginLeft: 25 }}>
				<Logo styles={{ width: 20 }} />
			</div>
		</div>
	);
};

export default HeaderAuth;
