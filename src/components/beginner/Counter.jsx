import { useState } from "react";
import Nav from "../Nav";

const Counter = () => {
    const [count, setCount] = useState(0);

    const actions = [
        {
            label: "Increase",
            onClick: () => setCount((prev) => prev + 1),
        },
        {
            label: "Reset",
            onClick: () => setCount(0),
        },
        {
            label: "Decrease",
            onClick: () => setCount((prev) => (prev === 0 ? prev : prev - 1)),
        },
    ];

    return (
        <>
            <Nav />

            <section className="flex flex-col items-center justify-center min-h-screen dark:text-slate-100 dark:bg-slate-900 px-4">
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                    alt="Bulbasaur"
                    className="w-28 h-28 mb-4"
                />

                <div className="py-8 bg-slate-200 dark:bg-slate-700 px-8 rounded-sm">
                    <h1 className="text-3xl text-center text-slate-800 font-bold mb-2 dark:text-slate-100">
                        Counter Component
                    </h1>
                    <h2 className="text-5xl text-center text-amber-500 py-4">{count}</h2>

                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {actions.map((action, idx) => (
                            <button
                                key={idx}
                                onClick={action.onClick}
                                className="bg-slate-900 cursor-pointer text-white dark:bg-slate-200 dark:text-slate-800 font-semibold px-5 py-2 rounded-md hover:scale-105 transition-transform"
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Counter;
