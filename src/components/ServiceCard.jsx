import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({ icon, title, description, link, delay }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Link 
      to={link} 
      data-aos="fade-up" 
      data-aos-delay={delay.toString()} 
      className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer"
    >
      <div className="text-blue-500 text-4xl mb-4 flex justify-center h-20 w-20 bg-black rounded-full group-hover:bg-accent-dark">
        <i className={`flaticon ${icon}`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <span className="text-secondary font-semibold">Learn More</span>
    </Link>
  );
};

export default ServiceCard;
