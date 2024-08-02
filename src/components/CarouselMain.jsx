import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerJeep from '../assets/banner-jeep.jpg';
import bannerMerc from '../assets/banner-merc.jpg';

const slides = [
  {
    image: bannerJeep,
    title: 'Ceramic Coating',
  },
  {
    image: bannerMerc,
    title: 'Graphene coating',
  },
  {
    image: bannerMerc,
    title: 'Water Wash',
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
            <h1 className="text-3xl font-bold">{slide.title}</h1>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselMain;
