import { DollarSign, MinusCircle, PlusCircle, ShoppingCartIcon } from "lucide-react"
import Nav from "../Nav"
import { useEffect, useState } from "react";
const items = [
    {
        id: 'bulbasur',
        name: 'Bulbasur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        type: 'toy',
        price: '6'
    },
    {
        id: 'charmeleon',
        name: 'Charmeleon',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        type: 'toy',
        price: '6'
    },
    {
        id: 'pikachu',
        name: 'Pikachu',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        type: 'puzzle',
        price: '12'
    },
]


const ShoppingCart = () => {

    const [cart, setCart] = useState({});
    const [amount, setAmount] = useState(0)

    const handleAdd = (id) => {
        let cur = items.filter((item) => item.id === id)
        console.log(cur)
        setCart((prev) => (
            { ...prev, [id]: (prev[id] || 0) + 1 }
        ))
    }

    const handleDelete = (id) => {
        setCart((prev) => (
            { ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 0 }
        ))
    }

    useEffect(() => {
        let total = 0;
        for (const id in cart) {
            const item = items.find((item) => item.id === id); 
            if (item) {
                total += parseInt(item.price) * cart[id];
            }
        }
        setAmount(total)
    }, [cart])

    return (
        <>
            <Nav />

            <section className="flex flex-col items-center justify-center min-h-screen dark:bg-slate-900 transition-all ease-in">
                
                <h1 className="text-4xl py-4 font-semibold text-slate-800 dark:text-slate-300">Shopping Cart</h1>
                
                <div className="bg-slate-100 dark:bg-slate-800 h-100 p-2 rounded-md flex justify-evenly flex-col">
                    {items.map((item) => (
                        <div className="flex flex-row gap-4 py-2" key={item.id}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 p-2 border rounded-xl bg-amber-300 border-amber-200"
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl font-semibold text-slate-800 dark:text-slate-50" >{item.name}</span>
                                <span className="text-sm text-slate-600 dark:text-slate-300" >{item.type}</span>
                                <span className="text-lg font-bold mt-2 text-slate-800 dark:text-slate-50"  >{item.price}</span>
                            </div>
                            <div className="flex flex-row gap-4 w-full items-end justify-end p-2">
                                <PlusCircle className="text-slate-800 dark:text-slate-50 cursor-pointer hover:scale-105" onClick={() => handleAdd(item.id)} />
                                <span className="text-xl dark:text-slate-50">{cart[item.id] || 0}</span>
                                <MinusCircle className="text-slate-800 dark:text-slate-50 cursor-pointer hover:scale-105" onClick={() => handleDelete(item.id)} />
                            </div>
                        </div>
                    ))}


                </div>
                <div className="flex flex-row my-4 mb-6 gap-4">
                    <button className="bg-amber-300 py-2 px-6 rounded-sm flex flex-row text-3xl gap-3 "> <ShoppingCartIcon className="mt-2" />{Object.values(cart).reduce((a, b) => a + b, 0)}</button>
                    <button className="bg-amber-300 py-2 px-6 rounded-sm flex flex-row text-3xl"> <DollarSign className="mt-2" /> {amount} </button>
                </div>

            </section>
        </>
    )
}

export default ShoppingCart