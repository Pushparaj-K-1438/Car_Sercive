import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerJeep from '../assets/banner-jeep.jpg';
import bannerMerc from '../assets/banner-merc.jpg';

const slides = [
  {
    image: bannerJeep,
    title: 'Premium 9H Nano Ceramic Coating',
    description: 'We are committed',
  },
  {
    image: bannerMerc,
    title: 'Change Your Car as Good as New in Just a Few Hours',
    description: 'We are committed',
  },
];

const CarouselMain = () => {
    return (
      <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      className="main-slider"
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
    >

      {slides.map((slide, index) => (
        <div key={index} className="relative">
          <img src={slide.image} alt={`slide-${index}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-center text-white bg-black bg-opacity-50 p-8">
            <span className="text-xl font-semibold">{slide.description}</span>
            <h1 className="text-3xl font-bold">{slide.title}</h1>
            <div className="btn-box mt-4 flex gap-4">
              <a href="/contact" className="btn text-white px-4 py-2 rounded bg-secondary">Get Appointment</a>
              <a href="/aboutus" className="btn text-white px-4 py-2 rounded bg-secondary">About Us</a>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselMain;
