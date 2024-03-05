import React, { useState } from "react";

function SearchPokemon({ onSearch, searchValue, onSearchChange }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(searchValue);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={searchValue}
					onChange={(e) => onSearchChange(e.target.value)}
					placeholder="Wpisz ID Pokémona"
				/>
				<button type="submit">Znajdź</button>
			</form>
		</div>
	);
}

export default SearchPokemon;
