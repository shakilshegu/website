import LogoIcon from "./icons/LogoIcon";
import SearchIcon from "./icons/SearchIcon";
import NotificationIcon from "./icons/NotificationIcon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-14">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/images/accommodations/logo.jpg"
                alt="Header Logo"
                className="w-12 h-12 rounded-full object-cover"
              />

              <span className="heading-lg text-gray-900">Dreamzz Travels</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-body text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/cities"
                className="text-body text-gray-500 hover:text-gray-900 transition-colors"
              >
                Explore cities
              </Link>
              <Link
                to="/cities"
                className="text-body text-gray-500 hover:text-gray-900 transition-colors"
              >
                Contacts
              </Link>
            </nav>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full border border-gray-600 hover:bg-gray-50 transition-colors">
              <SearchIcon width={20} height={20} color="#4b5563" />
            </button>
            <button className="p-2 rounded-full border border-gray-600 hover:bg-gray-50 transition-colors">
              <NotificationIcon width={19} height={21} color="#4b5563" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
