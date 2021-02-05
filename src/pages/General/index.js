import React, { useState, useContext, useEffect } from "react";

import Container from "../../components/Container";
// import Button from "../../components/Button";
import { Button, Progress, Popup, Header } from "semantic-ui-react";
import Context from "../../context/context";

import "semantic-ui-css/semantic.min.css";

import AuthModal from "../../components/AuthModal";
const General = () => {
	const { user, setMail, setGsm, setTc } = useContext(Context);
	const [percent, setPercent] = useState(1);
	useEffect(() => {
		setPercent(
			1 + user
				? (user.mail !== null ? 33 : 0) +
						(user.tcNo !== null ? 33 : 0) +
						(user.gsmNumber !== null ? 33 : 0)
				: 1
		);
	}, [user]);

	return (
		<div>
			<Container>
				<Popup
					content="Bulutlar üzerinde uçmaya hazırmısın?"
					trigger={<Button icon="smile" />}
				/>
				<h3>Hoşgeldin, {user.username} </h3>
				<br />
				PlusClouds dünyasına hoş geldiniz, burada olmanızdan çok
				memnunuz. Görüyoruz ki, bulut teknolojileriyle ilgileniyorsunuz.
				İhtiyacınızı karşılayacak bulut çözümlerine sahip olabilmeniz
				için isterseniz bize ulaşın, biz de bulut çözümlerinde
				başlayacağınız keşifte size en uygun yollar yaratalım.
				<br />
				<br />
				İşte bize ulabileceğiniz numara: +90 850 321 88 99
				<br />
				<br />
				İyi çalışmalar,
				<br /> Saygılarımızla.
				<hr />
			</Container>
			<Container>
				<Header as="h3">
					{percent >= 99
						? "Profiliniz hazır."
						: "Profiliniz tamamlanmamış gözüküyor"}
				</Header>
				<Progress percent={percent} indicating />
				<p>
					Plus Clouds'un tüm işlevlerini özgürce kullanabilmeniz için
					profil bilgileriniz girmeniz gerekmektedir. Aşağıdaki
					bölmelere basarak tamamlayabilirsiniz.
				</p>

				<div style={{ display: "flex", flexDirection: "row" }}>
					<AuthModal
						setData={(txt) => {
							setMail(txt);
						}}
						complete={user.mail !== null}
					>
						Mail Hesabınız
					</AuthModal>
					<AuthModal
						setData={(txt) => {
							setGsm(txt);
						}}
						complete={user.gsmNumber !== null}
					>
						Telefon Numaranız
					</AuthModal>
					<AuthModal
						setData={(txt) => {
							setTc(txt);
						}}
						complete={user.tcNo !== null}
					>
						Tc Numaranız
					</AuthModal>
				</div>
			</Container>
		</div>
	);
};

export default General;
