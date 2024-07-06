import React from 'react'

import Hero from '../../components/Hero'
import Footer from '../../components/Footer';
import MovingWords from '../../components/movingwords/MovingWords';
import Products from '../products';
//import ProductList from '../../components/ProductList';
const Home = () => {
  return (
    <div>
              <h1 className=' flex justify-center items-center uppercase  font-extrabold text-8xl  mt-16 border-b 'style={{color:'#ff0'}} >Crave</h1>
      <Hero/>
      
<MovingWords/>
<Products/>
<Footer/>
    </div>
  )
}

export default Home