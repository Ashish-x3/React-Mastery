import { useEffect, useState } from "react";
import Nav from "../Nav";
import { nanoid } from "nanoid";
import { Trash2 } from "lucide-react";

const ToDoList = () => {
    const [userText, setUserText] = useState("");
    const [todoList, setTodoList] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("todo")) || [];
        } catch (e) {
            console.error(e);
            return [];
        }
    });

    const handleAdd = () => {
        if (!userText.trim()) return alert("Add some text!");
        setTodoList((prev) => [...prev, { id: nanoid(), text: userText, strike: false }]);
        setUserText("");
    };

    const handleDelete = (index) => {
        if (!confirm("Delete this task?")) return;
        const prev = [...todoList];
        prev.splice(index, 1);
        setTodoList(prev);
    };

    const handleCheck = (index) => {
        setTodoList((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, strike: !item.strike } : item
            )
        );
    };

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todoList));
    }, [todoList]);

    return (
        <>
            <Nav />
            <section className="flex flex-col min-h-screen justify-start items-center px-4 md:px-8 lg:px-20 py-12 bg-slate-50 dark:bg-slate-900">
                <div className="flex flex-col items-center mb-4">
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                        alt="Bulbasaur"
                        className="w-24 h-24 drop-shadow-md animate-bounce"
                    />
                    <h1 className="text-5xl py-4 font-bold text-green-600 drop-shadow-sm tracking-wide mt-2">
                        Bulba-Tasks
                    </h1>
                    <span className="text-secondary font-semibold">The list is autosaved! Try refreshing the page.</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md">
                    <input
                        value={userText}
                        onChange={(e) => setUserText(e.target.value)}
                        className="w-full px-4 py-2 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-slate-800 dark:text-white"
                        placeholder="Enter a to-do"
                    />
                  <div className="flex flex-row gap-2 ">
                      <button
                        onClick={handleAdd}
                        className=" cursor-pointer px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold transition"
                    >
                        Add
                    </button>
                    <button
                        onClick={() => setTodoList([])}
                        className=" cursor-pointer px-6 py-2 bg-red-500 hover:bg-red-900 text-white rounded-md font-semibold transition"
                    >
                        Clear
                    </button>
                  </div>
                </div>


                <div className="w-full max-w-md pt-10 space-y-3">
                    {todoList.map((item, index) => (
                        <div
                            key={item.id}
                            className=" cursor-pointer flex items-center justify-between bg-green-100 dark:bg-green-700  px-4 py-3 rounded-md shadow-sm transition hover:scale-[1.01]"
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={item.strike}
                                    onChange={() => handleCheck(index)}
                                    className="w-5 h-5 accent-green-600"
                                />
                                <span
                                    className={`text-lg font-semibold dark:text-black ${item.strike
                                        ? "line-through text-gray-500"
                                        : "text-green-900 dark:text-white"
                                        }`}
                                >
                                    {item.text}
                                </span>
                            </div>
                            <button
                                onClick={() => handleDelete(index)}
                                className="text-red-500 cursor-pointer hover:text-red-700 transition"
                            >
                                <Trash2 />
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ToDoList;
