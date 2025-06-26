import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import Nav from '../Nav';

const ToggleSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <Nav />

            <div className="min-h-screen px-20 md:px-60 lg:px-80 p-8 bg-white dark:bg-slate-900 text-black dark:text-white transition-colors duration-200">
                <button
                    onClick={toggleTheme}
                    className="mb-4 px-4 py-2 cursor-pointer flex flex-row gap-2 dark:bg-white dark:text-black bg-gray-800 dark:hover:bg-blue-100 text-white rounded transition-colors duration-200"
                >
                    Toggle {theme === 'Light' ? 'Dark' : 'Light'} Theme {theme == 'Dark' ? <Sun /> : <Moon />}
                </button>

                <div className="p-8 bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors duration-200">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tailwind v4 Dark Mode Test</h1>
                    <p className="text-gray-700 dark:text-gray-300">Current theme: {theme}</p>

                    <div className="mt-4 p-4 border dark:bg-blue-900  bg-blue-300 border-gray-300 dark:border-blue-600 rounded">
                        <h2 className="text-lg font-semibold text-gray-800  dark:text-gray-200">Test Section</h2>

                    </div>
                </div>
            </div>
        </>

    )
}

export default ToggleSwitch


