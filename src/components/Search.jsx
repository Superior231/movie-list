/* eslint-disable react/prop-types */
export default function Search({ isActive, handleToggle }) {
    const search = (q) => {
        console.log(q)
    }

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
