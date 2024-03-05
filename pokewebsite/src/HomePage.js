import SearchOneSite from "./SearchOneSite.js";
import Pokedex from "./Pokedex.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pokemon from "./searchPokemons/Pokemon.js";
import logoPokeball from "./images/logoPokeball.png";

function HomePage() {
	return (
		<Router>
			<div className="header">
				<Link to="/">
					<img className="logo" src={logoPokeball} alt="Logo" />
				</Link>
				<h1 className="page-name">Poke Website </h1>
				<nav>
					<div className="router-div">
						<Link className="link" to="/SearchOneSite">
							Find Pokemon
						</Link>
					</div>
					<div className="router-name">
						<Link className="link" to="/Pokedex">
							Pokedex
						</Link>
					</div>
				</nav>
			</div>
			<div className="body">
				<div className="search-container">
					<Routes>
						<Route path="/SearchOneSite" element={<Pokemon />} />
						<Route path="/Pokedex" element={<Pokedex />} />
						<Route path="/" element={<Pokemon />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}
export default HomePage;
