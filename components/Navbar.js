import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import userData from '@constants/data';

export default function Navbar() {
  const router = useRouter();
  // const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
      <div className="flex md:flex-row justify-between items center">
        <div className='flex flex-col'>
          <Link href='/'>
            <a>
              <h1 className='text-xl font-semibold'>{userData.name}</h1>
              <p className='text-base font-light text-gray-500'>{userData.jobTitle}</p>
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
            <a>Experience{' '}</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
