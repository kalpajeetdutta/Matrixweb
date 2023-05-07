import Image from 'next/image'
import Image1 from '../public/kalpa.jpg'
import Image2 from '../public/sharbanee.jpg'
import Carousel from './carousel';

// const slides = [Image1, Image2]

function ImagePagination() {

    const slides = [Image1, Image2]

  return (
    <div 
    // className='w-[95%] h-[80%] rounded-md flex overflow-hidden'
    >
        <Carousel autoSlide={true}>
            {slides.map((slide) => {
                <Image src={slide} 
                // className="w-full h-full object-cover"
                />
            })}
        </Carousel>
    </div>
  )
}

export default ImagePagination