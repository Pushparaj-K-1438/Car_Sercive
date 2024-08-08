import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import carService from '../assets/car_service.svg'

const ServiceCard = ({ icon, title, description, link, delay }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Link 
      to={link} 
      data-aos="fade-up" 
      data-aos-delay={delay.toString()} 
      className="relative flex flex-col items-center justify-center overflow-hidden bg-white p-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer max-w-sm rounded-lg mx-auto hover:animate-bounceOnce"
    >
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-secondary transition-all duration-300"></span>
      <div className="relative z-10 flex flex-col items-center text-center mx-auto max-w-md">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-secondary">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg> */}
          <img src={carService} alt="Services Image" className='w-11'/>
        </span>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{title}</h3>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>{description}</p>
        </div>
        <div className="pt-5 text-base font-semibold leading-7">
          <p className="text-secondary transition-all duration-300 group-hover:text-white">
            Read More &rarr;
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
