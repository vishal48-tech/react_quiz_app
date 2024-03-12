import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { quizState, user_ansState, optionState, questionsState, timer } from '../store';
import { Link, useNavigate } from 'react-router-dom';


const Quiz = () => {
    const [quiz, setQuiz] = useRecoilState(quizState);
    const [userAns, setUserAns] = useRecoilState(user_ansState);
    const questions = useRecoilValue(questionsState);
    const options = useRecoilValue(optionState);
    const [seconds, setSeconds] = useRecoilState(timer);

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
            if (seconds === 1) {
                setQuiz(quiz => quiz + 1);
                setSeconds(30);
            }
        }, 1000);

        if (quiz === 11) navigate("/score");
        return () => clearInterval(interval);
    }, [quiz, seconds]);

    const handleClick = (id) => {
        const ans = userAns.filter((ans) => ans.id === quiz);
        if (ans.length) {
            const updatedAns = userAns.map((ans) => ans.id === quiz ? { ...ans, ans: id } : ans);
            setUserAns(updatedAns);
        }
        else {
            const newAns = { id: quiz, ans: id };
            const updatedAns = [...userAns, newAns];
            setUserAns(updatedAns);
        }
    };

    const handleNext = () => {
        setQuiz(quiz => quiz + 1);
        setSeconds(30);
    }

    return (
        <div
            className="flex flex-col items-center gap-y-16 bg-white bg-opacity-30 rounded-lg py-10 px-3 backdrop-filter backdrop-blur-md w-[95vw] max-w-[50rem] text-center"
        >
            <div>
                <p className={`text-4xl md:text-5xl mb-5 font-bold text-red-500 ${seconds > 10 && seconds < 21 && "blue"} ${seconds > 20 && "green"}`}>{seconds}</p>
                {questions.map((question) => question.id === quiz && (
                    <h1 key={question.id} className="text-2xl md:text-3xl font-semibold">{question.text}</h1>
                ))}
            </div>
            <div>
                {options.map((option) => option.id === quiz && (
                    <div key={option.id}
                        className="grid gap-y-3"
                    >
                        {option.items.map((item) => (
                            <p key={item.id}
                                className={`text-xl md:text-2xl font-semibold bg-white rounded-md p-3 w-[85vw] max-w-[40rem] cursor-pointer ${userAns.some(ans => ans.id === quiz && ans.ans === item.id) && "selected"}`}
                                onClick={() => handleClick(item.id)}
                            >{item.text}</p>
                        ))}
                    </div>
                ))}
            </div>
            <div
                className={`flex w-[85vw] max-w-[40rem] gap-3 justify-end`}
            >
                <button onClick={handleNext}
                    className={`bg-[#007bff] text-xl md:text-2xl rounded-md p-2 text-white hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:ring-opacity-50 transition duration-300 ease-in-out font-semibold w-32 ${quiz === 10 && "hidden"}`}
                >
                    Next
                </button>
                <Link to="/score"
                    className={`bg-[#007bff] text-xl md:text-2xl rounded-md p-2 text-white hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:ring-opacity-50 transition duration-300 ease-in-out font-semibold w-32 ${quiz !== 10 && "hidden"}`}
                >
                    Submit
                </Link>
            </div>
        </div>
    )
}

export default Quiz