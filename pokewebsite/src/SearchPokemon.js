import React, { useState } from "react";

function SearchPokemon({ onSearch }) {
	const [searchedPokemon, setSearchedPokemon] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(searchedPokemon);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={searchedPokemon}
					onChange={(e) => setSearchedPokemon(e.target.value)}
					placeholder="Pokemon name or ID in Pokedex"
				/>
				<button type="submit">Find</button>
			</form>
		</div>
	);
}

export default SearchPokemon;
