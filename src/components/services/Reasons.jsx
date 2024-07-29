const ReasonCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md text-center">
      <h3 className="font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Reasons = () => {
  const reasons = [
    { title: 'KEEP YOUR CAR CLEANER, LONGER', description: 'Hate your constantly dirty car? Protection from everything nasty; dirt, grime, bird poo... etc.' },
    { title: 'INTENSE SHINE, DEEP 3D GLOSS', description: 'Give your car that deep wax shined look, month after month, year after year. Look good always.' },
    { title: 'SIMPLE DIY APPLICATION', description: 'We’ve spent years perfecting our formula, so it’s more forgiving and easy to apply for any DIY’er.' }
  ];

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">3 REASONS TO TRY OUR CERAMIC COATING</h2>
      <p className="mb-8">Actually, it’s more like 100 reasons, but you get the point.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reasons.map((reason, index) => (
          <ReasonCard key={index} title={reason.title} description={reason.description} />
        ))}
      </div>
    </div>
  );
};

export default Reasons;
