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
    title: 'Ceramic Coating',
    description: 'A must and should coating for your car! The nano-ceramic coating is engineered to shield your car from scratches, rust, debris, soot and all kinds of everyday harsh threats.',
    link: '/ceramiccoating',
    delay: 200
  },
  {
    icon: 'flaticon-box',
    title: 'Paint Protection',
    description: 'A virtually invisible polymer layer applied by professionals that helps to primarily shield the paint from UV exposure, rock chips, mineral deposits, acid rain, scratches and more.',
    link: '/paintprotection',
    delay: 400
  },
  {
    icon: 'flaticon-discount',
    title: 'Wraps',
    description: 'Make your car look amazing by adding a pinch of personalization with Esperto car wraps. They come in carbon fiber, matte and gloss that can be customizable with high durability.',
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
