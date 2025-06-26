import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12 text-center">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="Pikachu"
        className="w-40 h-40 mb-6 animate-bounce"
      />

      <h1 className="text-5xl font-bold text-yellow-500">404</h1>
      <p className="text-xl mt-2 text-gray-700">
        Oops! Pikachu couldn’t find this page.
      </p>

      <p className="text-gray-500 mt-1">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block px-6 py-2 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:bg-yellow-300 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
