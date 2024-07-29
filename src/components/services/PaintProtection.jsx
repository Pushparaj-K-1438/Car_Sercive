import ServicesHeader from "./ServicesHeader"
import carImage from '../../assets/bg-inner.jpg';
import VideoDescription from "./VideoDescription";
import Reasons from "./Reasons";
import Benefits from './Benefits';

const PaintProtection = () => {
  return (
    <div className="">
    <ServicesHeader 
      backgroundImage={carImage} 
      title="Paint Protection Film" 
      subtitle="Home | Paint Protection Film" 
    />
     <VideoDescription />
    <Reasons />
    <Benefits />
  </div>
  )
}

export default PaintProtection