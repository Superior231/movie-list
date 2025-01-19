import Search from "./Search"
import { useState, useEffect } from "react"

export default function Navbar() {
    const [isActive, setIsActive] = useState(false)
    const [isScroll, setIsScroll] = useState(false)

    const handleToggle = (e) => {
        e.preventDefault();
        setIsActive((prev) => !prev); // Membalikkan nilai isActive
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
                <Search isActive={isActive} handleToggle={handleToggle} />
            </div>
        </nav>
    );
}
