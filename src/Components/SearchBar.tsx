function SearchBar({ search, setSearch }) {
	return (
		<input
			value={search}
			onInput={(event) => setSearch(event.target.value)}
			className="SearchBar"
			type="text"
		/>
	);
}

export default SearchBar;
