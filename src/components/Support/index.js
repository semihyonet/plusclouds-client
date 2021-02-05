import React from "react";
import { useHistory } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";

const DropdownUi = () => {
	let history = useHistory();
	return (
		<Button
			onClick={() => {
				history.push("/support");
			}}
		>
			<Icon name="life ring" />
		</Button>
	);
};

export default DropdownUi;
