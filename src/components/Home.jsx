import AboutUs from './AboutUs';
import CarouselMain from './CarouselMain';
import ServiceCard from './ServiceCard';
import WoekSectionTwo from './WoekSectionTwo';
import BenefitsSection from './BenefitsSection';
import ProtectionFeatures from './ProtectionFeatures';
import Testimonals from './Testimonals';

const services = [
  {
    icon: 'flaticon-cogwheels',
    title: 'Ceramic Coating System',
    description: 'Think of the moment you first saw your car gleaming in the sunlight, its pristine surface reflecting your excitement. Our Ceramic Coating System brings back that moment every day. This nano-ceramic shield protects your car from scratches, rust, and debris, preserving its beauty. Every drive becomes a journey in a car that looks as stunning as it did on day one, with a sparkle and gloss that turn heads wherever you go',
    link: '/ceramiccoating',
    delay: 200
  },
  {
    icon: 'flaticon-box',
    title: 'Paint Protection Film',
    description: 'Imagine driving without the constant worry of chips, scratches, or fading paint. Our Paint Protection Film gives you that peace of mind. This invisible layer, expertly applied, shields your car from the harsh realities of the road. UV rays, rock chips, and acid rain become powerless against your car’s flawless finish. And with its self-healing properties, those pesky swirl marks disappear as if by magic, keeping your car’s exterior smooth and glossy.',
    link: '/paintprotection',
    delay: 400
  },
  {
    icon: 'flaticon-discount',
    title: 'Car Wraps',
    description: 'Your car is an extension of your personality, and it should tell your story. With our custom car wraps, it does just that. Choose from carbon fiber, matte, or gloss finishes, and watch your car transform into a unique masterpiece that mirrors your style. Our wraps are designed to enhance every curve and contour, providing a durable, stunning finish. Best of all, when it’s time for a new look, the original paint remains untouched, as vibrant as ever.',
    link: '/services/wraps',
    delay: 600
  }
];

const Home = () => {
  return (
    <div className="bg-gray flex flex-col">
      <section className="text-white text-center">
        <CarouselMain />
      </section>
      <section className="services bg-gray-100 p-8 bg-transparent relative md:bottom-32 sm:bottom-22">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="why-us p-8 text-black text-center">
        <AboutUs />
      </section>
      <BenefitsSection />
      <ProtectionFeatures />
      <WoekSectionTwo />
      <Testimonals />
    </div>
  );
};

export default Home;
