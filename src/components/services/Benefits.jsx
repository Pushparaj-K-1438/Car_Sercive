import sparkles from '../../assets/sparkles.svg'
import sun from '../../assets/sun.svg'
import chemical from '../../assets/chemical.svg'
import droplet from '../../assets/droplet.svg'
import shield from '../../assets/shield.svg'
const BenefitCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={icon} alt={title} className="w-12 h-12 mb-2" />
      <p className="text-sm font-bold">{title}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    { icon: sparkles, title: 'Super High Gloss Finish' },
    { icon: sun, title: 'Fade Resistant' },
    { icon: chemical, title: 'Chemical Resistant' },
    { icon: chemical, title: 'Chemical Resistant' },
    { icon: droplet, title: 'Super Hydrophobic' },
    { icon: shield, title: 'Scratch Resistant (9H Hardness)' }
  ];

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-center text-2xl font-bold mb-4">BENEFITS OF CERAMIC COATING</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} icon={benefit.icon} title={benefit.title} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
