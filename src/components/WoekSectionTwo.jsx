import ourWoekImg from '../assets/our-work.jpg';

const WoekSectionTwo = () => {
    const items = [
        {
          icon: 'flaticon-gear',
          title: 'Undeniably genuine',
          subtitle: 'Premium products',
          description: 'What goes into your car is nothing but the best! We guarantee you high-quality consumables. We use top quality Drexler Ceramic coating solutions and Hexis Paint Protection Film from France.',
        },
        {
          icon: 'flaticon-team',
          title: 'Unmatched Service',
          subtitle: 'Warranty',
          description: 'Like never before, we give you 1, 3, and 5 years of unconditional Car Service Warranty. The maintenance cost varies depending upon the usage. We make sure you get more than what Authorised Service Centres have to offer!',
        },
        {
          icon: 'flaticon-capital',
          title: 'Unbeatable',
          subtitle: 'Services',
          description: 'No last minute surprises! With premium quality products and services, your car is going to get only the best. This is an Esperto promise!',
        },
        {
          icon: 'flaticon-support-1',
          title: 'Unbelievable Car',
          subtitle: 'Service experience',
          description: 'Free pick-up and drop-in services, for your ease and convenience. Now is the time to sit back, relax!',
        },
      ];
  return (
    <section className="choose-section py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="choose-title mb-8">
              <span className="text-secondary">Our works</span>
              <h2 className="text-4xl font-bold">How we works</h2>
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