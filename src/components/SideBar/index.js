import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

import MenuLi from "../MenuLi";

import Logo from "../../assets/logo.png";

const SideBar = () => {
	return (
		<div className={styles.sideBar}>
			<div className={styles.logoContainer}>
				<img src={Logo} alt="PlusClouds Logo" />
			</div>
			<div className={styles.text}>Hesabım</div>
			<nav>
				<ul>
					<Link className={styles.link} to={"/"}>
						<li>
							<MenuLi>Genel</MenuLi>
						</li>
					</Link>
				</ul>
				<ul>
					<Link className={styles.link} to={"/payment"}>
						<li>
							<MenuLi>Ödeme</MenuLi>
						</li>
					</Link>
				</ul>
				<ul>
					<Link className={styles.link} to={"/support"}>
						<li>
							<MenuLi>Destek</MenuLi>
						</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default SideBar;
