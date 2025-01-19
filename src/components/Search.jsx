/* eslint-disable react/prop-types */
export default function Search({ isActive, handleToggle }) {
    return (
        <form className={`search-box ${isActive ? "active" : ""}`}>
            <i className="bx bx-search text-lg" onClick={handleToggle}></i>
            <input 
                type="text" 
                placeholder="Search movie..." 
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
