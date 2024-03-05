import { useState, useEffect } from "react";
import axios from "axios";
import SearchPokemon from "./SearchPokemon";

function Pokemon() {
	const [pokemon, setPokemon] = useState(null);
	const [searchedPokemonID, setSearchedPokemonID] = useState(1);
	const [searchValue, setSearchValue] = useState("1");

	useEffect(() => {
		if (!searchedPokemonID) return;
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${searchedPokemonID}`)
			.then((response) => {
				setPokemon(response.data);
			})
			.catch((error) => {
				console.error("Jest Błąd", error);
				setPokemon(null);
			});
	}, [searchedPokemonID]);

	const handleSearch = (input) => {
		const id = parseInt(input, 10);
		if (!isNaN(id)) {
			setSearchedPokemonID(id);
			setSearchValue(id.toString());
		} else {
			setSearchPokemonByName(input);
		}
	};

	const handleSearchChange = (value) => {
		setSearchValue(value);
	};

	const setSearchPokemonByName = (name) => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
			.then((response) => {
				setPokemon(response.data);
				setSearchedPokemonID(response.data.id);
				setSearchValue(response.data.id.toString());
			})
			.catch((error) => {
				console.error("Jest Błąd", error);
				setPokemon(null);
			});
	};

	const handlePrevious = () => {
		const newID = Math.max(1, searchedPokemonID - 1);
		setSearchedPokemonID(newID);
		setSearchValue(newID.toString());
	};

	const handleNext = () => {
		const newID = searchedPokemonID + 1;
		setSearchedPokemonID(newID);
		setSearchValue(newID.toString());
	};

	return (
		<div>
			<SearchPokemon
				onSearch={handleSearch}
				searchValue={searchValue}
				onSearchChange={handleSearchChange}
			/>
			{pokemon && (
				<div>
					<h1>{pokemon.name}</h1>
					<img src={pokemon.sprites.front_default} alt={pokemon.name} />
					<h2>Typy:</h2>
					<ul>
						{pokemon.types.map((typeInfo, index) => (
							<li key={index}>{typeInfo.type.name}</li>
						))}
					</ul>
					<button onClick={handlePrevious}>Poprzedni</button>
					<button onClick={handleNext}>Następny</button>
				</div>
			)}
		</div>
	);
}

export default Pokemon;
