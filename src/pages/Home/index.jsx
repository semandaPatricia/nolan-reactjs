import React from 'react'

import Hero from '../../components/Hero'
import Footer from '../../components/Footer';
import MovingWords from '../../components/movingwords/MovingWords';
const Home = () => {
  return (
    <div>
              <h1 className=' flex justify-center items-center uppercase  font-extrabold text-8xl  mt-16 border-b border-t'>Nolan</h1>
      <Hero/>
<MovingWords/>
<Footer/>
    </div>
  )
}

export default Home