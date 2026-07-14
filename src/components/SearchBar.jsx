import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ search }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() !== "") {
      search(city);
      setCity("");
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
