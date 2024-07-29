// import videoThumbnail from '../../assets/video-thumbnail.jpg';
import redPorsche from '../../assets/red-porsche2.jpg';


const VideoDescription = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-8">
      <div className="w-full md:w-1/2">
        <img src={redPorsche} alt="Ceramic Coating" className="w-full rounded-lg shadow-md" />
      </div>
      <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
        <h2 className="text-xl font-bold">World's most advanced Ceramic Coating System</h2>
        <p className="mt-4">The longer, the better! The premium 9H nano Ceramic coating gives ultimate durability to your car with a long-lasting polymer coat. The nano-coating has the ability to shield most of the scratches, debris, rust and other wear and tear.</p>
        <p className="mt-4">We completely assure you that Esperto’s ceramic coating lasts longer than regular paint and does not interfere with the car's original color. Not only does it make your car look much better, but the coating is unaffected even during vibrations or heavy shocks.</p>
        <p className="mt-4">Additional point - with a ceramic coat, your car is radiant once again with just a swipe.</p>
      </div>
    </div>
  );
};

export default VideoDescription;
