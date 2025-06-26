import { Home, Moon, StepBack, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Nav = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    {
      icon: <StepBack />,
      action: () => navigate('/beginner'),
      label: 'Back',
    },
    {
      icon: theme === 'Light' ? <Moon /> : <Sun />,
      action: toggleTheme,
      label: 'Toggle Theme',
    },
    {
      icon: <Home />,
      action: () => navigate('/home'),
      label: 'Home',
    },
  ];

  return (
    <nav className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-black dark:bg-white text-white dark:text-black border border-pink-400 p-3 rounded-full flex gap-6 shadow-lg">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={item.action}
          className="relative group text-xl cursor-pointer flex items-center hover:scale-150 transition-all ease-in"
          aria-label={item.label}
        >
          {item.icon}
          {/* Tooltip */}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap z-10">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Nav;
