import React from "react";
import styles from "./style.module.css";
import DropdownUi from "../Dropdownn";
import Language from "../Language";
import Support from "../Support";
import { Header as HeaderAlt } from "semantic-ui-react";
const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textElement} style={{ paddingTop: 10 }}>
				<HeaderAlt as="h4">Hesaplar</HeaderAlt>
			</div>
			<div className={styles.textElement}>
				<Language />
				<Support />
				<DropdownUi />
			</div>
		</div>
	);
};

export default Header;
