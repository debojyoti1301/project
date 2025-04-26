import { Home, Search, Users, Map, Settings, PenTool as Tool } from 'lucide-react';

interface SidebarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Sidebar = ({ onNavigate, currentPage }: SidebarProps) => {
  const navItems = [
    { icon: Home, label: 'Home', id: 'home' },
    { icon: Search, label: 'Explore', id: 'explore' },
    { icon: Users, label: 'Community', id: 'community' },
    { icon: Map, label: 'Map', id: 'map' },
    { icon: Tool, label: 'Tools', id: 'tools' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-16 md:w-64 bg-white dark:bg-gray-800 shadow-md transition-all duration-300">
      <nav className="mt-8">
        <ul className="space-y-2 px-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="hidden md:inline">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;