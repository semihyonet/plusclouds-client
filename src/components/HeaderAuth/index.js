import React from "react";
import styles from "./style.module.css";
import { ReactComponent as Logo } from "../../assets/logo-text.svg";
import { ReactComponent as Icon } from "../../assets/logo-icon.svg";

const HeaderAuth = () => {
	return (
		<div className={styles.contAll}>
			<div className={styles.container}>
				<div>
					<Icon style={{ transform: "scale(1.5)" }} />
				</div>
				<div style={{ marginLeft: 25 }}>
					<Logo styles={{ transform: "scale(2)" }} />
				</div>
			</div>
			<div className={styles.catchPhrase}>
				<h2 className={styles.h1}>
					LESS TIME ON SERVERS, MORE TIME ON SOFTWARE
				</h2>
				<div
					style={{
						display: "flex",
						alignContent: "center",
						justifyContent: "center",
					}}
				>
					<h3 className={styles.h3}>
						CLOUD ∙ ENGINEERING ∙ DEVOPS ∙ AUTOMATION
					</h3>
				</div>
			</div>
		</div>
	);
};

export default HeaderAuth;
