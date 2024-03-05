import { useState, useEffect } from "react";
import axios from "axios";

function Pokemon() {
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon/ditto")
			.then((response) => {
				console.log(response.data);
				setPokemon(response.data);
				console.log(pokemon);
			})
			.catch((error) => console.error("Jest Blad", error));
	}, []);
	return (
		<div>
			<h1>{pokemon.name}</h1>
			<img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
		</div>
	);
}
export default Pokemon;
