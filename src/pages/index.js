import { useRef } from "react";
import Body from "../../components/body";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Home() {

  const body = useRef()

  const handleScroll = (scrollRef) => {
      console.log(scrollRef)
      scrollRef.current?.scrollIntoView({top: scrollRef.current?.offsetTop, behavior: 'smooth'})
  }

  return (
    <div style={{scrollSnapType: 'y mandatory', overflowY: 'scroll', height: '100%'}}>
      <div style={{height: '100vh', scrollSnapAlign: 'start'}} className="relative">
        <Header/>
        <div className="bg-[#032e5c] flex h-full">
          <div className="flex flex-col m-auto items-center">
              <div className="text-gray-50 sm:text-6xl text-5xl font-extralight"><span className="font-bold">Matrix</span> calculator</div>
              <div className="text-gray-300 text-base my-2">Calculate your every matrix in one place.</div>
              <div className="mt-5">
                  <button className="bg-gradient-to-r from-green-600 to-blue-700 hover:opacity-80 text-gray-50 py-1 px-5 rounded-2xl text-lg"
                      onClick={() => handleScroll(body)}
                  >Get Started</button>
              </div>
          </div>
        </div>
      </div>
      <div
        ref={body}
        style={{scrollSnapAlign: 'start'}}>
        <Body />
      </div>
      <div
        style={{scrollSnapAlign: 'start'}}>
        <Footer />
      </div>
    </div>
  )
}

