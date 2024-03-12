import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div
            className="flex flex-col items-center gap-y-20 bg-white bg-opacity-30 rounded-lg py-10 px-3 backdrop-filter backdrop-blur-md w-[95vw] max-w-[40rem] text-center"
        >
            <h1
                className="text-3xl md:text-4xl font-bold"
            >
                Welcome to React JS Quiz
            </h1>
            <Link to="/quiz"
                className="bg-[#007bff] text-xl md:text-2xl rounded-md p-2 text-white hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:ring-opacity-50 transition duration-300 ease-in-out font-semibold w-52"
            >
                Start Quiz
            </Link>
        </div>
    )
}

export default Home