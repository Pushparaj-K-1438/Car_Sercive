import Copyright from "./Copyright";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    <footer className="bg-gradient-to-l from-gradientFrom to-gradientTo font-semibold py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold">Car Service</h2>
            <p>We’re dedicated to giving you the very best of ceramic protection Services in Detailing industry. Your number one source for all types of Auto detailing services.</p>
          </div>
          {/* Address */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">ADDRESS</h2>
            <ul>
              <li className="flex items-start mb-2">
                <i className="flaticon-right-arrow mr-2"></i>
                <span>Address: 80 Feet Rd, 1A Block, Koramangala, Bengaluru, 560034.</span>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">QUICK LINKS</h2>
            <ul>
              <li className="flex items-start mb-2">
                <i className="flaticon-right-arrow mr-2"></i>
                <Link to="/" className="mr-4 my-2 md:my-0">Home</Link>
              </li>
              <li className="flex items-start mb-2">
                <i className="flaticon-right-arrow mr-2"></i>
                <Link to="/aboutus" className="mr-4 my-2 md:my-0">About Us</Link>
              </li>
              <li className="flex items-start mb-2">
                <i className="flaticon-right-arrow mr-2"></i>
                <Link to="/contactus" className="mr-4 my-2 md:my-0">Contact Us</Link>
              </li>
              <li className="flex items-start mb-2">
                <i className="flaticon-right-arrow mr-2"></i>
                <Link to="/ceramiccoating" className="mr-4 my-2 md:my-0">Ceramic Coating</Link>
              </li>
              <li className="flex items-start mb-2">
                <i className="flaticon-right-arrow mr-2"></i>
                <Link to="/paintprotection" className="mr-4 my-2 md:my-0">Paint Protection</Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">CONTACT</h2>
            <ul>
              <li className="flex items-start mb-2">
                <i className="flaticon-right-arrow mr-2"></i>
                <span>Phone:</span> <a href="tel:7338555444"> +91 9999-999-999</a>
              </li>
              <li className="flex items-start mb-2">
                <i className="flaticon-right-arrow mr-2"></i>
                <span>Phone:</span> <a href="tel:7349666888"> +91 9999-999-999</a>
              </li>
              <li className="flex items-start mb-2">
                <i className="flaticon-right-arrow mr-2"></i>
                <span>Email:</span> <a href="mailto:sales@esperto.in"> sales@carServices.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <Copyright />
    </>
  );
};

export default Footer;
