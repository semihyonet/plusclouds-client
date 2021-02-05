import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Dropdown, Icon, Menu } from "semantic-ui-react";

const MenuExampleSubMenu = () => {
	const [activeItem, setItem] = useState("");
	let history = useHistory();
	const handleItemClick = (e, { name }) => {
		setItem(name);
		history.push("/");
		history.push(name);
	};

	return (
		<Menu vertical style={{ width: "100%" }}>
			<Menu.Item
				name=""
				active={activeItem === ""}
				onClick={handleItemClick}
			>
				Genel
			</Menu.Item>
			<Menu.Item>
				Ödemeler
				<Menu.Menu>
					<Menu.Item
						name="payment/history"
						active={activeItem === "payment/history"}
						onClick={handleItemClick}
					>
						Geçmiş
					</Menu.Item>
					<Menu.Item
						name="payment/add"
						active={activeItem === "payment/add"}
						onClick={handleItemClick}
					>
						Kredi Kartı ekle
					</Menu.Item>
					<Menu.Item
						name="payment/cards"
						active={activeItem === "payment/cards"}
						onClick={handleItemClick}
					>
						Kayıtlı kartlarım
					</Menu.Item>
				</Menu.Menu>
			</Menu.Item>

			<Menu.Item
				name="ads"
				active={activeItem === "ads"}
				onClick={handleItemClick}
			>
				<Icon name="grid layout" />
				Kampanyalarım
			</Menu.Item>
			<Menu.Item
				name="details"
				active={activeItem === "details"}
				onClick={handleItemClick}
			>
				Kayıtlı bilgilerim
			</Menu.Item>

			<Dropdown item text="Diğer">
				<Dropdown.Menu>
					<Dropdown.Item icon="edit" text="Profilimi düzenle" />

					<Dropdown.Item icon="settings" text="Ayarlar" />
				</Dropdown.Menu>
			</Dropdown>
		</Menu>
	);
};
export default MenuExampleSubMenu;
