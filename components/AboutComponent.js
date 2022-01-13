import React from 'react';
import userData from '@constants/data';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RoughNotation } from 'react-rough-notation';

export default function AboutComponent() {
  return (
    <section className='bg-white'>
      <div className='max-w-6xl mx-auto h-48 bg-white'>
        <h1 className='text-5xl md:text-9xl py-20 text-center'>
          About Me!
        </h1>
      </div>
      <div className='bg-orange-300 -mt-9'>
        <div className='text-container max-w-6xl mx-auto pt-20'>
          <p
            className='leading-loose text-3xl md:mx-4 lg:mx-auto'
            style={{ lineHeight: '3rem' }}
          >
            {userData.about.title} Currently working for:{' '}
            <a
              className='bg-emerald-300 rounded-md px-2 py-1 text-white'
              href={userData.about.currentProjectUrl}
              target='_blank'
              rel='noreferrer'
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
              <span className='mt-3'>
                If you are wondering about something, send me an{' '}
                <div className='inline-block transform hover:scale-110 hover:rotate-6'>
                  <a
                    href={`mailto:${userData.email}`}
                  >
                    <RoughNotation
                      type='box'
                      show={true}
                    >
                      e-mail
                    </RoughNotation>
                  </a>
                </div>{' '}
                !
              </span>
            </div>
            <div className='mt-8'>
              <h1 className='text-xl font-semibold text-gray-700'>Resume</h1>
              <span className='mt-3'>
                Please take a look at my{' '}
                <div className='inline-block transform hover:scale-125 hover:-rotate-6'>
                  <a
                    href={userData.cvUrl}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <RoughNotation
                      type='circle'
                      show={true}
                      color='blue'
                    >
                      CV
                    </RoughNotation>
                  </a>
                </div>{' '}
                if you are interested!
              </span>
            </div>
            <h1 className='text-xl font-semibold text-gray-700 mt-8'>SoMe</h1>
            <div className='mt-4 ml-4'>
              <div className='flex flex-row justify-start items-center'>
                <a
                  href={userData.someLinks.linkedin}
                  className='flex flex-row items-center space-x-4 group'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='my-4'><FaLinkedin /></div>
                  <span className='font-mono relative overflow-hidden'>
                    <div className='absolute h-0.5 w-full bg-emerald-300 bottom-0 -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
                    LinkedIn
                  </span>
                </a>
              </div>
              <div className='flex flex-row justify-start items-center'>
                <a
                  href={userData.someLinks.github}
                  className='flex flex-row items-center space-x-4 group'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='my-4'><FaGithub /></div>
                  <span className='font-mono relative overflow-hidden'>
                    <div className='absolute h-0.5 w-full bg-emerald-300 bottom-0 -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
                    Github
                  </span>
                </a>
              </div>
              <div className='flex flex-row justify-start items-center'>
                <a
                  href={userData.someLinks.instagram}
                  className='flex flex-row items-center space-x-4 group'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='my-4'><FaInstagram /></div>
                  <span className='font-mono relative overflow-hidden'>
                    <div className='absolute h-0.5 w-full bg-emerald-300 bottom-0 -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
                    Instagram
                  </span>
                </a>
              </div>
              <div className='flex flex-row justify-start items-center'>
                <a
                  href={userData.someLinks.twitter}
                  className='flex flex-row items-center space-x-4 group'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='my-4'><FaTwitter /></div>
                  <span className='font-mono relative overflow-hidden'>
                    <div className='absolute h-0.5 w-full bg-emerald-300 bottom-0 -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
                    Twitter
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-1 md:col-span-2'>
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className='font-mono mb-3'
              >
                {desc}
              </p>
            ))}

            <h1 className='bg-emerald-300 text-3xl rounded-md px-2 py-1 inline-block font-semibold text-white'>
              Skills
            </h1>
            <div className='flex flex-row flex-wrap mt-8'>
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/javascript.svg'
                alt='javascript logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/nodejs.svg'
                alt='nodejs logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/express.svg'
                alt='express logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/graphql.svg'
                alt='graphql logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/mongodb.svg'
                alt='mongodb logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/postgresql.svg'
                alt='postgresql logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg'
                alt='react logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/redux.svg'
                alt='redux logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/nextjs.svg'
                alt='nextjs logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/html-5.svg'
                alt='html logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/css-3.svg'
                alt='css logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/tailwindcss.svg'
                alt='tailwindcss logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/mocha.svg'
                alt='mocha logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/jest.svg'
                alt='jest logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/git.svg'
                alt='git logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/github.svg'
                alt='github logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/neovim.svg'
                alt='neovim logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/jwt.svg'
                alt='jwt logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/heroku.svg'
                alt='heroku logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/github-actions.svg'
                alt='github actions logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/docker.svg'
                alt='docker  logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/webpack.svg'
                alt='webpack  logo'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/gilbarbara/logos/master/logos/netlify.svg'
                alt='netlify logo'
                className='h-20 w-20 mx-4 my-4'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
