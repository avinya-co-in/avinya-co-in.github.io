import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-20 h-16">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <a href="index.html" className="flex items-center">
          <img src="/logo.png" alt="Avinya" className="h-12 w-auto" />
        </a>

        {/* Navigation */}
        <nav className={`absolute top-full left-0 w-full bg-white md:relative md:top-auto md:left-auto md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden md:block'}`}>
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0 text-lg">
            <li><a className="block py-2 text-gray-800 hover:text-blue-600 md:py-0" href="#hero">Home</a></li>
            <li><a className="block py-2 text-gray-800 hover:text-blue-600 md:py-0" href="#about">About</a></li>
            <li><a className="block py-2 text-gray-800 hover:text-blue-600 md:py-0" href="#services">Services</a></li>
            <li><a className="block py-2 text-gray-800 hover:text-blue-600 md:py-0" href="#contact">Contact</a></li>
            <li>
              <a className="block" href="https://anvika.vercel.app/login">
                <div className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-200 w-max">
                  Login
                </div>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800 hover:text-blue-600 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
    </header >
  );
};

export default Navbar;
