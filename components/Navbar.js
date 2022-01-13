import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import userData from '@constants/data';

export default function Navbar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-5 md:py-5">
      <div className="flex md:flex-row justify-between items center">
        <div className='flex flex-col'>
          <Link href='/'>
            <a>
              <h1 className='text-xl font-semibold'>{userData.name}</h1>
              <p className='text-base font-light text-gray-500 mb-1'>{userData.jobTitle}</p>
            </a>
          </Link>
        </div>

        <div className='space-x-8 hidden md:block'>
          <Link href='/about'>
            <a
              className={`text-base ${router.asPath === '/about'
                ? 'text-gray-800 font-bold'
                : 'text-gray-600 font-normal'
                }`}
            >
              About{' '}
              {router.asPath === '/about' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="bi bi-arrow-down inline-block h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 29"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>)}
            </a>
          </Link>
          <Link href='/experience'>
            <a
              className={`text-base ${router.asPath === '/experience'
                ? 'text-gray-800 font-bold'
                : 'text-gray-600 font-normal'
                }`}
            >
              Experience{' '}
              {router.asPath === '/experience' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="bi bi-arrow-down inline-block h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 29"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>)}
            </a>
          </Link>
          <Link href='/a3cfb4b2bc1b4980994d5767ec8d1996'>
            <a
              className={`text-base ${router.asPath === '/a3cfb4b2bc1b4980994d5767ec8d1996'
                ? 'text-gray-800 font-bold'
                : 'text-gray-600 font-normal'
                }`}
            >
              Blog{' '}
              {router.asPath === '/a3cfb4b2bc1b4980994d5767ec8d1996' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="bi bi-arrow-down inline-block h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 29"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>)}
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
