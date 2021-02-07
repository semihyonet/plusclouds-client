import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { UserOutlined } from "@ant-design/icons";

import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";

import Context from "../../context/context";
const Username = ({ cb }) => {
	return (
		<Input
			className={styles.input}
			onChange={cb}
			size="large"
			placeholder="Enter Username"
			prefix={<UserOutlined />}
			style={{
				borderRadius: 20,
				padding: 15,
				fontSize: 20,
				fontWeight: "700",
			}}
		/>
	);
};

const Password = ({ cb }) => {
	return (
		<Input.Password
			className={styles.input}
			size={"large"}
			style={{
				borderRadius: 20,
				padding: 15,
				fontSize: 20,
				fontWeight: "700",
			}}
			placeholder="input password"
			iconRender={(visible) =>
				visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
			}
			onChange={cb}
		/>
	);
};

const SignUp = () => {
	let history = useHistory();
	const { signup, error, setError } = useContext(Context);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className={styles.mainContainer}>
			<form
				style={{ paddingTop: 38 }}
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<div className={styles.container}>
					<Username
						cb={(e) => {
							setUsername(
								e.target.value.replace(/[^A-Za-z]/gi, "")
							);
						}}
					/>
				</div>
				<div className={styles.container}>
					<Password
						cb={(e) => {
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
								paddingRight: 80,
								paddingLeft: 80,
							}}
						>
							Sign up
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
