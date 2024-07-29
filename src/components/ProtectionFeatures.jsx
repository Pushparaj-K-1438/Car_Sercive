import carDesignBg from '../assets/design-bg.png';

const ProtectionFeatures = () => {
  const features = [
    {
      icon: 'assets/img/partnar/icon1.png',
      title: 'UV AND SUNSHINE',
    },
    {
      icon: 'assets/img/partnar/icon2.png',
      title: 'WEATHER EROSION',
    },
    {
      icon: 'assets/img/partnar/icon3.png',
      title: 'ACID RAIN',
    },
    {
      icon: 'assets/img/partnar/icon4.png',
      title: 'GRAFFITI & SCRATCHES',
    },
    {
      icon: 'assets/img/partnar/icon5.png',
      title: 'BIRD DROPPING',
    },
    {
      icon: 'assets/img/partnar/icon6.png',
      title: 'TREE GUM',
    },
  ];

  return (
    <div className="about-section py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/6 p-4">
              <div className="single-featured-services-box text-center p-6 bg-white shadow-lg rounded-lg">
                <div className="services-area-content">
                  <div className="icon mb-4">
                    <img src={feature.icon} alt={feature.title} className="mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <img src={carDesignBg} alt="team" className="mx-auto" />
      </div>
    </div>
  );
};

export default ProtectionFeatures;
