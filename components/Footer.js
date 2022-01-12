import React from 'react';
import userData from '@constants/data';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='bg-white'>
      <div className='max-w-6xl mx-auto px-4 pb-10 md:pb-20'>
        <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8'>
          <div>
            <p>&copy; Thomas Anda</p>
          </div>
          <div>
            <p>
              Made with
              <div className='inline-block transform hover:scale-110 hover:rotate-3 transition duration-300'>
                <a
                  className='hover:bg-orange-300 rounded-md px-2 py-1 hover:text-gray-500'
                  href='https://nextjs.org/'
                >
                  NEXT.js
                </a>
              </div>
            </p>
          </div>
          <div className='space-x-4 flex flex-row items-center'>
            <a
              href={userData.someLinks.instagram}
              className='text-base font-normal text-gray-600'>
              <FaInstagram />
            </a>
            <a
              href={userData.someLinks.twitter}
              className='text-base font-normal text-gray-600'>
              <FaTwitter />
            </a>
            <a
              href={userData.someLinks.linkedin}
              className='text-base font-normal text-gray-600'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div >
    </div>
  )
}
