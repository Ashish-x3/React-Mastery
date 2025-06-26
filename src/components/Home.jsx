import { useNavigate } from "react-router-dom";

const levels = [
  {
    id: 1,
    level: "Beginner",
    href: "/beginner",
    pokemon: {
      name: "Bulbasaur",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
  },
  {
    id: 2,
    level: "Intermediate",
    href: "/intermediate",
    pokemon: {
      name: "Charmeleon",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    },
  },
  {
    id: 3,
    level: "Advanced",
    href: "/advanced",
    pokemon: {
      name: "Blastoise",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    },
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-dvh flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
      <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl transition-colors duration-300 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Welcome 👋🏻
        </h1>

        <div className="p-4 text-center border dark:bg-blue-900 bg-blue-300 border-gray-300 dark:border-blue-600 rounded-lg mb-6">
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Practice React Machine Coding Challenges with Pokémon!
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((lvl) => (
            <div
              key={lvl.id}
              onClick={() => navigate(lvl.href)}
              className="cursor-pointer group text-center p-4 rounded-xl bg-slate-200 dark:bg-slate-700 hover:scale-105 transition-transform hover:shadow-md"
            >
              <img
                src={lvl.pokemon.img}
                alt={lvl.pokemon.name}
                className="w-24 h-24 mx-auto mb-2 group-hover:animate-bounce"
              />
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                {lvl.level}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {lvl.pokemon.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
