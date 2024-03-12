import React from 'react'
import { useRecoilValue } from 'recoil'
import { user_ansState } from '../store';

const Score = () => {
    const userAns = useRecoilValue(user_ansState);

    const answers = [
        { id: 1, ans: 2 },
        { id: 2, ans: 1 },
        { id: 3, ans: 2 },
        { id: 4, ans: 4 },
        { id: 5, ans: 1 },
        { id: 6, ans: 3 },
        { id: 7, ans: 4 },
        { id: 8, ans: 2 },
        { id: 9, ans: 3 },
        { id: 10, ans: 3 },
    ];

    const correctAnswers = userAns.filter(ans => {
        const correctAnswer = answers.find(answer => answer.id === ans.id);
        return correctAnswer && correctAnswer.ans === ans.ans;
    });

    return (
        <div
            className="flex flex-col items-center gap-y-10 bg-white bg-opacity-30 rounded-lg py-10 px-3 backdrop-filter backdrop-blur-md w-[95vw] max-w-[40rem] text-center"
        >
            <h1 className="text-4xl md:text-5xl font-bold">Your Score</h1>
            <h1 className="text-7xl md:text-8xl font-bold">{correctAnswers.length}</h1>
            <a href="/"
                className="bg-[#007bff] text-xl md:text-2xl rounded-md p-2 text-white hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:ring-opacity-50 transition duration-300 ease-in-out font-semibold w-52"
            >
                Back to Home
            </a>
        </div>
    )
}

export default Score