import { Home, Moon, StepBack, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Nav = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    {
      icon: <StepBack size={24} />,
      action: () => navigate(-1),
      label: 'Back',
    },
    {
      icon: theme === 'Light' ? <Moon size={24} /> : <Sun size={24} />,
      action: toggleTheme,
      label: 'Theme',
    },
    {
      icon: <Home size={24} />,
      action: () => navigate('/home'),
      label: 'Home',
    },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-300 dark:border-slate-600 px-6 py-3 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex gap-8 text-gray-800 dark:text-white transition-all duration-300">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={item.action}
          aria-label={item.label}
          className="relative group flex items-center justify-center transition-all duration-300 hover:scale-125 hover:text-yellow-300 cursor-pointer active:scale-110"
        >
          {item.icon}

          {/* Tooltip */}
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap z-10">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Nav;
