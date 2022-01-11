import React from 'react';
import userData from '@constants/data';

export default function AboutComponent() {
  return (
    <section className='bg-white'>
      <div className='max-w-6xl mx-auto h-48 bg-white'>
        <h1 className='text-5xl md:text-9xl py-20 text-center md:text-left'>
          About Me!
        </h1>
      </div>
      <div className='bg-orange-300 -mt-9'>
        <div className='text-container max-w-6xl mx-auto pt-20'>
          <p
            className='leading-loose text-1xl mx-4'
            style={{ lineHeight: '3rem'}}
          >
            {userData.about.title} Currently working for:{' '}
            <a 
              className='bg-emerald-300 rounded-md px-2 py-1 text-white'
              href={userData.about.currentProjectUrl}
              target='_blank'
            >
            {userData.about.currentProject} 🧑🏻‍💻
            </a>
          </p>
        </div>
      </div>
      <div className='bg-orange-300 px-4'>
        <div className='pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20'>
          <div className='inline-flex flex-col'>
            <div>
              <h1 className='text-xl font-semibold text-gray-700'>
                Contact
              </h1>
              <p className='mt-3'>
                If you are wondering about something send me a{' '}
                <a
                  href={`mailto:${userData.email}`}
                  className='text-emerald-300 border-b-2 border-emerald-800 font-bold'
                >
                mail
                </a>
                !
              </p>
            </div>
            <div className='mt-8'>
              <h1 className='text-xl font-semibold text-gray-700'>Resume</h1>
              <p className='mt-3'>
                Please take a look at my{' '}
                <a
                  href={userData.cvUrl}
                  target='_blank'
                  className='text-emerald-300 border-b-2 border-emerald-800 font-bold'
                >
                CV
                </a>{' '}
                if you are interested!
              </p>
            </div>
            <h1 className='text-xl font-semibold text-gray-700 mt-8'>SoMe</h1>
            <div className='mt-4 ml-4'>
              <div className='flex flex-row justify-start items-center'>
                <a
                  href={userData.someLinks.instagram}
                  className='flex flex-row items-center space-x-4 group'
                  >
                  <div className='my-4'>&rarr;</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
