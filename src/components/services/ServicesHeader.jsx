const ServicesHeader = ({ backgroundImage, title, subtitle }) => {
  return (
    <div 
      className="relative w-full h-64 md:h-96 bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-sm md:text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServicesHeader;
