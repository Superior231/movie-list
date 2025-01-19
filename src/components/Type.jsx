/* eslint-disable react/prop-types */
export default function Type({ type }) {
    return (
        <button
            key={type}
            type={type}
            className="btn text-color btn-color hover:bg-blue-700 hover:text-white transition duration-300 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 rounded-tl-lg rounded-r-lg"
        >
            <span>{type}</span>
        </button>
    )
}
