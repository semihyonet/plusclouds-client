import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideBar from "./components/SideBar";
import Header from "./components/Header";

import General from "./pages/General";
import Help from "./pages/Help";
import Payment from "./pages/Payment";

function App() {
	return (
		<div className="App">
			<Router>
				<SideBar />
				<div className={"AppContainer"}>
					<Header />
					<div className="Screen">
						<Switch>
							<Route path="/" exact component={General} />
							<Route path="/payment" component={Payment} />
							<Route path="/support" component={Help} />
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
