import "./App.css";
import SearchOneSite from "./SearchOneSite.js";
import Pokedex from "./Pokedex.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pokemon from "./searchPokemons/Pokemon.js";
function App() {
	return (
		<Router>
			<div className="App">
				<nav>
					<ul>
						<li>
							<Link to="/SearchOneSite">Find Pokemon</Link>
						</li>
						<li>
							<Link to="/Pokedex">Pokedex</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/SearchOneSite" element={<Pokemon />} />
					<Route path="/Pokedex" element={<Pokedex />} />
					<Route path="/" element={<Pokemon />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
