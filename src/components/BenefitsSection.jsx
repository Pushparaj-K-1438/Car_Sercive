const BenefitsSection = () => {
  const benefits = [
    {
      number: 1,
      title: 'Keep your car cleaner longer!',
      description: 'It is annoying to get your car washed & cleaned so often! Take a break for your car will repel dust, dirt, soot, and everything unwanted.',
    },
    {
      number: 2,
      title: 'Shine on you crazy diamond!',
      description: 'Give your car the ultimate shine and deep gloss year after year!',
    },
    {
      number: 3,
      title: 'Easy-peasy DIY applications',
      description: 'We have spent a solid time figuring out the right formula for your car that is easy to apply.',
    },
    {
      number: 4,
      title: 'Unlimited support',
      description: 'Leave it to us! Anytime, any day, we are here to help you out.',
    },
  ];

  return (
    <section className="works-section py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="works-title text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary">What’s in it for you?</h2>
          <p>Imagine the joy of driving a car that not only performs flawlessly but also radiates beauty. Our services offer you more than just protection; they provide an experience. You’ll feel the difference every time you take the wheel, knowing your car is cared for by the best in the business. It’s about pride, confidence, and the pure pleasure of owning a car that’s always at its best.</p>
        </div>
        <div className="flex flex-wrap">
          {benefits.map((benefit, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="works-item-content text-center  p-6 rounded-lg h-full">
                <div className="works-number mb-4">
                  <a href="#" className="number-btn bg-accent-dark text-gray-900 rounded-full h-12 w-12 flex items-center justify-center mx-auto text-2xl font-bold">
                    <span>{benefit.number}</span>
                  </a>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
