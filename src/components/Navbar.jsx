import Search from "./Search";
import Results from "./Results";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const [showResults, setShowResults] = useState(false);  // Menampilkan modal result
    const [searchResults, setSearchResults] = useState([]); // State untuk menyimpan hasil pencarian

    const handleToggle = (e) => {
        e.preventDefault();
        setIsActive((prev) => !prev);
    };

    const handleSearch = (query, results) => {
        setShowResults(query.length > 0); // Tampilkan Results jika query tidak kosong
        setSearchResults(results); // Simpan hasil pencarian
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.pageYOffset > 0;
            setIsScroll(isScrolling);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`navbar sticky top-0 ${isScroll ? "active" : ""} ${isActive ? "search-active" : ""}`}
            >
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <a
                        href="/"
                        className={`logo flex items-center gap-2 ${isActive ? "active" : ""}`}
                    >
                        <img src="/public/icon.png" alt="logo" style={{ width: "30px" }} />
                        <h4 className="font-bold text-color">Movie List</h4>
                    </a>
                    <Search
                        isActive={isActive}
                        handleToggle={handleToggle}
                        onSearch={handleSearch}
                    />
                </div>
            </nav>
            {showResults &&
                <Results
                    results={searchResults} // Kirim hasil pencarian ke Results
                    isActive={isActive}
                    handleToggle={handleToggle}
                />}
        </>
    );
}
