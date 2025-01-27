/* eslint-disable react/prop-types */
import { useEffect } from "react"

export default function Title({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return null
}
