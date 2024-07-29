import ServicesHeader from "./ServicesHeader";
import carImage from '../../assets/bg-inner.jpg';
import VideoDescription from "./VideoDescription";
import Reasons from "./Reasons";
import Benefits from './Benefits';

const CeramicCoating = () => {
  return (
    <div className="">
      <ServicesHeader 
        backgroundImage={carImage} 
        title="Ceramic Coating" 
        subtitle="Home | Ceramic Coating" 
      />
       <VideoDescription />
      <Reasons />
      <Benefits />
    </div>
  );
};

export default CeramicCoating;
