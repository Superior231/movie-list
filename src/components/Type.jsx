/* eslint-disable react/prop-types */
export default function Type({ type }) {
    return (
        <button
            key={type}
            type={type}
            className="cursor-pointer btn text-color btn-color hover:bg-blue-700 hover:text-white transition duration-300 rounded-tl-lg rounded-r-lg px-3 py-2 sm:px-4 sm:py-3 md:px-4 md:py-3"
        >
            <span>{type}</span>
        </button>
    )
}
