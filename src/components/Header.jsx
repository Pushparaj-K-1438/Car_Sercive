import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const showDropdown = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    setIsDropdownVisible(true);
  };

  const hideDropdown = () => {
    const timeout = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 300); // Adjust delay time as needed
    setHideTimeout(timeout);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  return (
    <header
      className={`bg-gradient-to-l from-gradientFrom to-gradientTo p-4 text-black font-semibold sticky top-0 w-full z-50 transition-all duration-300 ${isSticky ? 'shadow-lg' : 'shadow-none'}`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl">Car Services</h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:static top-0 right-0 mt-16 md:mt-0 bg-gray-800 md:bg-transparent w-full md:w-auto`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:ml-auto z-50 relative p-4 md:p-0">
            <Link to="/" className="mr-4 my-2 md:my-0 text-white lg:text-black">Home</Link>
            <Link to="/aboutus" className="mr-4 my-2 md:my-0 text-white lg:text-black">About Us</Link>
            <Link to="/contactus" className="mr-4 my-2 md:my-0 text-white lg:text-black">Contact Us</Link>
            <div
              className="relative group"
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <button className="mr-4 my-2 md:my-0 inline-flex items-center text-white lg:text-black">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownVisible && (
                <div className="absolute right-0 bg-gray-800 md:bg-white text-black md:mt-1 rounded shadow-lg w-full md:w-fit">
                  <Link to="/ceramiccoating" className="whitespace-nowrap block px-4 py-2 hover:bg-gray-200 text-white lg:text-black hover:text-black">Ceramic Coating</Link>
                  <Link to="/paintprotection" className="whitespace-nowrap block px-4 py-2 hover:bg-gray-200 text-white lg:text-black hover:text-black">Paint Protection</Link>
                  {/* <Link to="/wraps" className="whitespace-nowrap block px-4 py-2 hover:bg-gray-200">Wraps</Link> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
