import CardResult from "./CardResult";

/* eslint-disable react/prop-types */
export default function Results({ results, isActive, handleToggle }) {
    return (
        isActive && (
            <div className="modal-result-container bg-black bg-opacity-50 fixed inset-0 w-full h-full" style={{ zIndex: '200' }}>
                <div className="modal-result">
                    <div className="modal-header flex justify-between align-middle">
                        <h3 className="text-xl font-bold">Results</h3>
                        <i className="bx bx-x text-2xl cursor-pointer" onClick={handleToggle}></i>
                    </div>
                    <div className="modal-body mt-5">
                        {results.length >= 2 ? (
                            <CardResult results={results} />
                        ) : (
                            <p className="mt-5 text-center">No results found.</p>
                        )}
                    </div>
                </div>
            </div>
        )
    );
}
