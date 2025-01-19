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
            className={`navbar sticky top-0 ${isScroll ? "active" : ""}`}
        >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <a
                    href="/"
                    className={`logo flex items-center gap-2 ${isActive ? "active" : ""}`}
                >
                    <img src="/public/icon.png" alt="logo" className="w-10 h-10" />
                    <h1 className="text-2xl font-bold text-color">Movie List</h1>
                </a>
                <Search isActive={isActive} handleToggle={handleToggle} />
            </div>
        </nav>
    );
}


