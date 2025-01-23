import { searchMovie } from "../api/MovieApi";

/* eslint-disable react/prop-types */
export default function Search({ isActive, handleToggle, onSearch }) {
    const search = async (q) => {
        if (q.length >= 2) {
            const results = await searchMovie(q); // Ambil hasil pencarian
            onSearch(q, results); // Kirim query dan hasil pencarian
        } else {
            onSearch("", []); // Kosongkan hasil pencarian jika query kurang dari 2 karakter
        }
    };

    return (
        <form className={`search-box ${isActive ? "active" : ""}`}>
            <i className="bx bx-search text-lg" onClick={handleToggle}></i>
            <input
                type="text"
                placeholder="Search movie..."
                onChange={(e) => search(e.target.value)}
            />
            {isActive && (
                <i
                    className="bx bx-x text-lg"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleToggle(e);
                    }}
                ></i>
            )}
        </form>
    );
}
