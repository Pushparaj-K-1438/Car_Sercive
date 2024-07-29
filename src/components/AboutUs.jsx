import redPorsche from '../assets/red-porsche2.jpg';

const AboutUs = () => {
    return (
        <div className="p-8 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Image Section */}
            <img 
                src={redPorsche} 
                alt="Red Porsche" 
                className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg aos-init aos-animate" 
                data-aos="fade-left" 
                data-aos-delay="200"
            />

            {/* Text Section */}
            <div className="md:w-1/2 flex flex-col gap-4 aos-init aos-animate"  data-aos="fade-left" 
                data-aos-delay="500">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
                <p className="text-gray-700 leading-relaxed">
                    Undeniably, walking out of a showroom with a brand new car is one of the best feelings in the world. Protecting your amazing car deserves an amazing service! We're here with a dedicated team giving you the best of ceramic protection Services in the Detailing industry. You can very well count on us for all types of auto detailing services.

                    The coatings division of Drexler Ceramic is a global expert in the development and production of sustainable automotive refinish coatings. We provide premium Ceramic 9h Nano Mirror Hydrophobic Coating & Paint Protection Film (PPF) for your car.

                    Along with the top-notch eco-friendly ceramic protection services and products, Esperto India follows durable treatment to protect your car from paint to wheels. We provide a water-repellent surface for lasting protection to your car from potential threats on an everyday endeavor.

                    We hope you enjoy our services as much as we enjoy offering them to you. We now serve all over Bangalore and are thrilled to drive happiness!
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
