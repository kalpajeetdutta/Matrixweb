import Carousel from "../../../components/carousel"
import {FaTwitter, FaInstagram} from 'react-icons/fa';

function About() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#032e5c] to-[#226fc1] p-10">
        <div className="w-full flex flex-col-reverse sm:flex-row mx-auto">
            <div className="flex-1 flex flex-col sm:my-auto text-center sm:text-left my-5 sm:pl-5">
                <div className="md:text-5xl sm:text-3xl text-2xl font-semibold text-gray-50 sm:my-3">Developed By</div>
                <div className="md:text-xl sm:text-base text-gray-50 font-light sm:my-3 mt-1 sm:mt-0">Kalpajeet Dutta (<span className="text-sm">ET22BTHCS045 CSE 2nd sem</span>)</div>
                <div className="md:text-xl sm:text-base text-gray-50 font-light">Sharbanee Kalita (<span className="text-sm">ET22BTHCS006 CSE 2nd sem</span>)</div>
                <div className="mt-3 sm:my-10 flex flex-col items-center sm:items-start">
                <div className="sm:mt-20 w-full mt-5">
                    <div className="text-2xl sm:text-3xl text-gray-50 sm:text-left my-1">Social Links</div>
                    <div className="flex items-center justify-between sm:justify-normal w-full mt-2">
                        <div className="text-gray-50 font-light">Sharbanee Kalita</div>
                        <div className="flex items-center sm:ml-10">
                            <div className='text-[#d62976] hover:text-gray-50'><a href='https://instagram.com/sharbaneekalita?igshid=ZDdkNTZiNTM='><FaInstagram size={23}/></a></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-normal w-full mt-3">
                        <div className="text-gray-50 font-light">Kalpajeet Dutta</div>
                        <div className="flex items-center sm:ml-10">
                            <div className='text-[#00acee] hover:text-gray-50'><a href='https://twitter.com/duttakalpajeet'><FaTwitter size={23}/></a></div>
                            <div className='text-[#d62976] hover:text-gray-50 ml-5'><a href='https://instagram.com/duttakalpajeet?igshid=YmMyMTA2M2Y='><FaInstagram size={23}/></a></div>
                        </div>
                    </div>
                </div>
        </div>
            </div>
            <div className="flex-1 flex justify-center">
                <Carousel />
            </div>
        </div>
    </div>
    )
  }
  
  export default About