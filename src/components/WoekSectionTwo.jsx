import ourWoekImg from '../assets/our-work.jpg';

const WoekSectionTwo = () => {
    const items = [
        {
          icon: 'flaticon-gear',
          title: 'Undeniably Genuine',
          subtitle: 'Premium products',
          description: 'We use only the highest quality products to ensure exceptional results.',
        },
        {
          icon: 'flaticon-team',
          title: 'Unmatched Service',
          subtitle: 'Warranty',
          description: 'Our comprehensive warranty guarantees your satisfaction and peace of mind.',
        },
        {
          icon: 'flaticon-capital',
          title: 'Unbeatable',
          subtitle: 'Services',
          description: 'Our range of services is designed to deliver unparalleled quality and effectiveness.',
        },
        {
          icon: 'flaticon-support-1',
          title: 'Unbelievable Car',
          subtitle: 'Service experience',
          description: 'From the moment you arrive, we strive to provide an experience that leaves you delighted and your car looking incredible. Transform your car with us. Visit our studio today and rediscover the joy of driving a vehicle that looks and feels brand new!',
        },
      ];
  return (
    <section className="choose-section py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="choose-title mb-8">
              <span className="text-secondary">Our works</span>
              <h2 className="text-4xl font-bold">About Our Services</h2>
              <p>We offer a range of detailing services that are second to none. Whether you’re looking for ultimate protection, a stunning new look, or a combination of both, we have the perfect solution for you. Our services are designed to exceed your expectations, ensuring your car looks and performs at its peak.</p>
            </div>
            <div className="flex flex-wrap">
              {items.map((item, index) => (
                <div key={index} className="w-full sm:w-1/2 p-4">
                  <div className="choose-item bg-gray-800 p-6 rounded-lg h-full shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                    <div className="choose-area-content">
                      <i className={`text-secondary ${item.icon} text-4xl mb-4`}></i>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title} <span className="text-secondary">{item.subtitle}</span>
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="choose-image flex items-center justify-center">
              <img src={ourWoekImg} alt="choose" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WoekSectionTwo