import React, { useState } from "react";
import { Modal, Button, Header, Icon } from "semantic-ui-react";
import Box from "../Box";

function AuthModal({ children, complete, setData }) {
	const [text, setText] = useState("");
	const [open, setOpen] = React.useState(false);
	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			closeIcon
			open={open}
			trigger={
				<button
					style={{
						display: "flex",
						borderWidth: 1,
						padding: 20,
						margin: 5,
						alignContent: "center",
						justifyContent: "center",
						flex: 1,
						border: "dotted",
						borderColor: complete === true ? "green" : "red",
						backgroundColor: "#fff",
					}}
				>
					<Box complete={complete}>{children}</Box>
				</button>
			}
			header={children}
			actions={[
				"İptal",
				{ key: "done", content: "Gönder", positive: true },
			]}
		>
			{" "}
			<Header icon="archive" content={children} />
			<Modal.Content>
				<div>
					<input
						value={text}
						onChange={(e) => {
							setText(e.target.value);
						}}
						style={{ width: "100%" }}
					/>
				</div>
			</Modal.Content>
			<Modal.Actions>
				<Button color="red" onClick={() => setOpen(false)}>
					<Icon name="remove" /> No
				</Button>
				<Button
					color="green"
					onClick={() => {
						setData(text);
						setOpen(false);
					}}
				>
					<Icon name="checkmark" /> Yes
				</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AuthModal;
