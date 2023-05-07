import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';
import {FaTwitter, FaInstagram} from 'react-icons/fa';
import {VscTriangleUp} from 'react-icons/vsc';
import Image1 from '../public/kalpa.jpg';
import Image2 from '../public/sharbanee.jpg';


function Header() {
  return (
    <header className='flex bg-gradient-to-r from-[#1666bb] to-[#032e5c] py-5 px-4 sm:px-10 absolute top-0 left-0 right-0'>
        <div className='flex flex-1 justify-between items-center'>
            <div className='text-2xl font-semibold text-gray-50'>
                Matrix
            </div>
            <div className='text-base text-gray-50 hover:text-[#acd1f9]'><Link href="/about">About</Link></div>
        </div>
        <div className='flex w-14 sm:w-16 justify-between items-center ml-5 sm:ml-10'>
            <div className='text-[#00acee] hover:text-gray-50'><a href='https://twitter.com/duttakalpajeet' target="_blank"><FaTwitter size={23}/></a></div>
            <div className='text-[#d62976] hover:text-gray-50 relative group'>
              <div className='hover:cursor-pointer'><FaInstagram size={23}/></div>
              <div className='w-40 absolute -right-5 top-[30px] bg-gray-100 p-2 rounded-lg invisible group-hover:visible opacity-0 transition-opacity ease-linear duration-1000 group-hover:opacity-100'>
                <div className='absolute -top-4 right-4 text-gray-100'>
                  <VscTriangleUp size={30} color="#F3F4F6"/>
                </div>
                <div className=''>
                  <a href='https://instagram.com/duttakalpajeet?igshid=YmMyMTA2M2Y=' target="_blank" className='flex items-center'>
                    <Image src={Image1} className="w-8 h-8 rounded-full object-cover object-center" alt='Profile-pic'/>
                    <div className='text-xs text-black ml-2 hover:text-opacity-70 hover:underline'>Kalpajeet Dutta</div>
                  </a>
                </div>
                <div className='mt-3'>
                  <a href='https://instagram.com/sharbaneekalita?igshid=ZDdkNTZiNTM=' target="_blank" className='flex items-center'>
                    <Image src={Image2} className="w-8 h-8 rounded-full object-cover object-center" alt='Profile-pic'/>
                    <div className='text-xs text-black ml-2 hover:text-opacity-70 hover:underline'>Sharbanee Kalita</div>
                  </a>
                </div>
              </div>
            </div>
        </div>
    </header>
  )
}

export default forwardRef(Header)