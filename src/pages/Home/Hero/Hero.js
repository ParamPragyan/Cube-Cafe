import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
                <span>welcome</span> to <span className='cube-cafe'>Cube Cafe</span>
            </h1>

            <p className='text-white'>The best Cafe and restaurant in the town</p>

            <p className='text-white'>
                Book your Order <span className='special-word'>(+91)12345-67890</span>
            </p>
        </div>
    </div>
  )
}

export default Hero