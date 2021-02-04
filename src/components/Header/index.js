import React from "react";
import styles from "./style.module.css";

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textElement}>Genel</div>
			<div className={styles.textElement}>Merhaba, Semih Yönet</div>
		</div>
	);
};

export default Header;
