import React, {useState} from 'react' 
import { Picture } from '../Utils/constants';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () =>{
        setCurrentIndex(currentIndex === Picture.length - 1 ? 0 : currentIndex + 1
     );
  };

  const handlePrevious =()=>{
    setCurrentIndex(currentIndex === 0 ? Picture.length-1 : currentIndex - 1
    );
  };

return (
    <div className="flex items-center">
        <button className="text-xl p-4 rounded-full text-white bg-black absolute text-center left-[8vw]" onClick={handleNext}>&lt;</button>
        <div className="pt-4 relative -z-20">
        {Picture.map(
          (pic, index) =>
            currentIndex === index && (
              <div key={pic} className="relative w-[50vw]">
                <img className="rounded-md" src={pic} alt="images" />
        </div>
            ))}
            
        </div>
        <button className="text-xl p-4 rounded-full text-white bg-black absolute text-center right-[41vw]" onClick={handlePrevious}>&gt;</button>
    </div>
  )
}

export default Carousel