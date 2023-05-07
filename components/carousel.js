import { useState, useEffect } from "react"
import Image from 'next/image'
import Image1 from '../public/kalpa.jpg'
import Image2 from '../public/sharbanee.jpg'

export default function Carousel({
  autoSlide = true,
  autoSlideInterval = 5000,
}) {
  const [curr, setCurr] = useState(0)
  const slides = [Image1, Image2]

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="overflow-hidden relative max-w-[80%] h-full">
      <div
        className="w-full h-full flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, i) => {
            return(
                <Image key={i} src={slide} alt={`profile-pic${i}`} priority={true}
                className="w-full h-full rounded-lg object-cover object-center"
                />
            )
            })}
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-gray-100 rounded-full
              ${curr === i ? "px-3" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}