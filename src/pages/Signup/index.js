import React, { useContext, useState } from "react";
import styles from "./style.module.css";

import { useHistory } from "react-router-dom";

import Button from "../../components/Button";

import Context from "../../context/context";

const SignUp = () => {
	let history = useHistory();
	const { signup, error, setError } = useContext(Context);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className={styles.mainContainer}>
			<h3>Merhaba!</h3>
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
							setUsername(
								e.target.value.replace(/[^A-Za-z]/gi, "")
							);
						}}
					/>
				</div>
				<div className={styles.container}>
					<div className={styles.smallText}>Şifre</div>
					<input
						style={{ width: "100%" }}
						value={password}
						onChange={(e) => {
							setPassword(
								e.target.value.replace(/[^a-zA-Z0-9 ]/gi, "")
							);
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
							signup(username, password, () => {
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
							Üye ol
						</div>
					</Button>
				</div>
			</form>
			<button
				onClick={() => {
					setError("");

					history.push("/login");
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
				Hesabınız varmı? Giriş yap!
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

export default SignUp;
