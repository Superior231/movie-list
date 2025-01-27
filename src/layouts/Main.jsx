/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";

export default function Main({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
