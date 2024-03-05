import React, { useState, useEffect } from "react";
import axios from "axios";

function Pokedex() {
	const [pokemonList, setPokemonList] = useState([]);
	const [generation, setGeneration] = useState(1); // Domyślnie ustawiona na pierwszą generację

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/generation/${generation}/`)
			.then((response) => {
				const promises = response.data.pokemon_species.map((species) =>
					axios
						.get(`https://pokeapi.co/api/v2/pokemon/${species.name}`)
						.catch((error) => {
							console.error(`Nie znaleziono Pokémona: ${species.name}`, error);
							return null; // Zwracamy null, aby łatwo było to odfiltrować później
						})
				);

				Promise.all(promises).then((pokemonDetailsResponses) => {
					const pokemonDetails = pokemonDetailsResponses
						.filter((response) => response !== null) // Odfiltrowujemy nieudane próby
						.map((response) => ({
							name: response.data.name,
							image: response.data.sprites.front_default,
							types: response.data.types.map((typeInfo) => typeInfo.type.name),
						}));

					setPokemonList(pokemonDetails);
				});
			})
			.catch((error) => console.error("Jest błąd", error));
	}, [generation]);

	return (
		<div>
			<h1>Pokédex - Generacja {generation}</h1>
			<select
				value={generation}
				onChange={(e) => setGeneration(e.target.value)}
			>
				{/* Generowanie opcji dla różnych generacji */}
				{[1, 2, 3, 4, 5, 6, 7, 8].map((gen) => (
					<option key={gen} value={gen}>
						Generacja {gen}
					</option>
				))}
			</select>
			<ul>
				{pokemonList.map((pokemon) => (
					<li key={pokemon.name}>
						<h2>{pokemon.name}</h2>
						<img src={pokemon.image} alt={pokemon.name} />
						<p>Typy: {pokemon.types.join(", ")}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Pokedex;
