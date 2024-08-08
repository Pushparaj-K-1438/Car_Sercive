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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
                <p className="text-gray-700 leading-relaxed">We believe that car detailing is an art form. Our passionate team of experts treats every vehicle with the utmost care and precision, using only premium, genuine products. Our service warranty is a testament to our confidence in our work and our commitment to your satisfaction. When you choose us, you choose a team that cares about your car as much as you do.</p>
            </div>
        </div>
    );
}

export default AboutUs;
