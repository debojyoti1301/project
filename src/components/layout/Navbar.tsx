import { Sun, Moon, Award } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import RewardsPanel from '../rewards/RewardsPanel';
import { useState } from 'react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [showRewards, setShowRewards] = useState(false);

  return (
    <nav className={`sticky top-0 z-10 ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent animate-pulse-slow relative group">
                Eco
                <span className="text-green-600 dark:text-green-400">Verse</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            
            <div className="relative">
              <button
                onClick={() => setShowRewards(!showRewards)}
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Rewards"
              >
                <Award className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">230 ECO Coins</span>
              </button>
              
              {showRewards && <RewardsPanel onClose={() => setShowRewards(false)} />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;