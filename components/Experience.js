import userData from '@constants/data';
import React from 'react';

export default function Experience() {

  return (
    <section className='bg-white'>
      <div className='max-w-6xl mx-auto h-48 bg-white'>
        <h1 className='text-5xl md:text-9xl py-20 text-center'>
          Experience
        </h1>
      </div>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 -mt-9'>
        <div className='grid grid-cols-1 max-w-xl mx-auto pt-20'>
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                description={exp.description}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className='divider-container flex flex-col items-center -mt-2'>
                  <div className='w-4 h-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full relative z-10'>
                    <div className='w-4 h-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full relative z-10 animate-ping'></div>
                  </div>
                  <div className='w-1 h-24 bg-gray-200 rounded-full -mt-5'></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, description, year, company, companyLink }) => {
  return (
    <div className='relative experience-card border p-4 rounded-md shadow-xl bg-white z-10 mx-4'>
      <h1 className='absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold'>
        {year}
      </h1>
      <h1 className='font-semibold text-xl'>{title}</h1>
      <a href={companyLink} className='text-gray-500'>
        {company}
      </a>
      <p className='text-gray-600 my-2'>{description}</p>
    </div>
  )

}
