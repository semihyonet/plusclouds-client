import React, { useContext, useState } from "react";
import styles from "./style.module.css";

import { useHistory } from "react-router-dom";

import Button from "../../components/Button";

import Context from "../../context/context";

const Login = () => {
	let history = useHistory();
	const { login, error, setError } = useContext(Context);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className={styles.mainContainer}>
			<h3>Tekrar Hoşgeldiniz!</h3>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<div className={styles.container}>
					<div className={styles.smallText}>Kullanıcı adı </div>
					<input
						style={{ width: "100%" }}
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
				</div>
				<div className={styles.container}>
					<div className={styles.smallText}>Şifre</div>
					<input
						value={password}
						style={{ width: "100%" }}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<div
					className={styles.container}
					style={{
						marginTop: 5,
						display: "flex",
						alignContent: "center",
						justifyContent: "center",
						fontWeight: "900",
					}}
				>
					<Button
						event={() => {
							login(username, password, () => {
								setError("");
								history.push("/");
							});
						}}
					>
						<div
							style={{
								fontWeight: "900",
								fontSize: 20,
							}}
						>
							Giriş
						</div>
					</Button>
				</div>
			</form>
			<button
				onClick={() => {
					setError("");

					history.push("/signin");
				}}
				style={{
					paddingTop: 10,
					paddingBottom: 10,
					border: "none",
					background: "none",
					color: "#008ab2",
					fontWeight: "700",
				}}
			>
				Hesapınız yokmu? Üye olun!
			</button>
			<div
				style={{
					backgroundColor: "#f26b71",
					borderRadius: "10%",
					display: "flex",
					justifyContent: "center",
				}}
			>
				{error}
			</div>
		</div>
	);
};

export default Login;
