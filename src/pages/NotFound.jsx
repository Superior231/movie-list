// import React from 'react'
import Title from "../components/Title";

export default function NotFound() {
    return (
        <>
            <Title title={"Not Found"} />
            <div className="fixed inset-0 flex flex-col justify-center items-center">
                <div className="image">
                    <img src="/404.png" alt="error" className="w-52 h-52" />
                </div>
                <h5 className="text-center text-lg font-semibold text-color">Page not found</h5>
            </div>
        </>
    )
}
