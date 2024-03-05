import { useState, useEffect } from "react";
import axios from "axios";
import SearchPokemon from "./SearchPokemon";

function Pokemon() {
	const [pokemon, setPokemon] = useState(null);
	const [searchedPokemonID, setSearchedPokemonID] = useState("");

	useEffect(() => {
		if (!searchedPokemonID) return;
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${searchedPokemonID}`)
			.then((response) => {
				setPokemon(response.data);
			})
			.catch((error) => console.error("Jest Błąd", error));
	}, [searchedPokemonID]);

	const handleSearch = (id) => {
		setSearchedPokemonID(id);
	};

	return (
		<div>
			<SearchPokemon onSearch={handleSearch} />
			{pokemon && (
				<div>
					<h1>{pokemon.name}</h1>
					<img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
				</div>
			)}
		</div>
	);
}

export default Pokemon;
