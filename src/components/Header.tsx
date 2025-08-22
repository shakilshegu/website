import { useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import NotificationIcon from "./icons/NotificationIcon";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const activeClass = "text-gray-900 font-semibold"; // Active link style
  const inactiveClass = "text-gray-500 hover:text-gray-900 transition-colors";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/places"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Explore places
              </NavLink>
              <NavLink
                to="/cities"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Contacts
              </NavLink>
            </nav>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop Icons */}
            <div className="hidden sm:flex items-center gap-3">
              <button className="p-2 rounded-full border border-gray-600 hover:bg-gray-50 transition-colors">
                <SearchIcon width={20} height={20} color="#4b5563" />
              </button>
              <button className="p-2 rounded-full border border-gray-600 hover:bg-gray-50 transition-colors">
                <NotificationIcon width={19} height={21} color="#4b5563" />
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4 pt-4">
              <NavLink
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md transition-colors ${
                    isActive 
                      ? "bg-gray-100 text-gray-900 font-semibold" 
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/places"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md transition-colors ${
                    isActive 
                      ? "bg-gray-100 text-gray-900 font-semibold" 
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`
                }
              >
                Explore places
              </NavLink>
              <NavLink
                to="/cities"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md transition-colors ${
                    isActive 
                      ? "bg-gray-100 text-gray-900 font-semibold" 
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`
                }
              >
                Contacts
              </NavLink>
              
              {/* Mobile Action Buttons */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                  <SearchIcon width={20} height={20} color="currentColor" />
                  <span className="text-sm">Search</span>
                </button>
                <button className="flex items-center gap-2 p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                  <NotificationIcon width={19} height={21} color="currentColor" />
                  <span className="text-sm">Notifications</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;