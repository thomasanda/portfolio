import React from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight } from './RainbowHighlight';
import userData from '@constants/data';

export default function Hero() {
  return (
    <div className='flex flex-ro justify-center items-start overflow-hidden'>
      <div className='w-full md:w=1/2 mx-auto text-center md:text=left lg:p-20'>
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={['#0EB1D2']}>
            <h1 className='text-4xl md:text-8xl font-bold text-gray-700 my-2'>
              Developer
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
    </div>
  )
}

