import { createContext, useState } from "react";
import server from "../axios/server";

const Context = createContext(null);

export const Provider = ({ children }) => {
	const [error, setError] = useState("");
	const [token, setToken] = useState(null);
	const [user, setUser] = useState({});
	const getUser = async () => {
		if (token && user.username) {
			const resp = await server.get("/user", {
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			});
			setUser(resp.data);
		}
	};

	const login = async (username, password, cb) => {
		setError("");
		const resp = await server.post("/login", { username, password });
		console.log(resp);

		if (resp.data.token) {
			setToken(resp.data.token);
			localStorage.setItem("token", token);
			cb();
			setUser(resp.data.data);
		} else {
			setError("Wrong password or username.");
		}
	};
	const signup = async (username, password, cb) => {
		setError("");
		const resp = await server.post("/signin", { username, password });
		console.log(resp);

		if (resp.data.token) {
			setToken(resp.data.token);
			localStorage.setItem("token", token);
			cb();
			setUser(resp.data.data);
		} else {
			setError("Wrong password or username.");
		}
	};
	const setMail = async (mail) => {
		if (token && user.username) {
			const resp = await server.put(
				"/user/mail",
				{ mail },
				{
					headers: {
						Authorization: "Bearer " + token,
						"Content-Type": "application/json",
					},
				}
			);
			setUser(resp.data);
		}
	};
	const setTc = async (tcNo) => {
		if (token && user.username) {
			const resp = await server.put(
				"/user/id",
				{ tcNo },
				{
					headers: {
						Authorization: "Bearer " + token,
						"Content-Type": "application/json",
					},
				}
			);
			setUser(resp.data);
		}
	};
	const setGsm = async (gsmNumber) => {
		if (token && user.username) {
			const resp = await server.put(
				"/user/gsm",
				{ gsmNumber },
				{
					headers: {
						Authorization: "Bearer " + token,
						"Content-Type": "application/json",
					},
				}
			);
			setUser(resp.data);
		}
	};

	const values = {
		login,
		token,
		error,
		setError,
		signup,
		getUser,
		user,
		setToken,
		setMail,
		setGsm,
		setTc,
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default Context;
