import React from 'react'
import Navbar from './component/navbar'
import Herosection from './component/herosection'
import Features from './component/features'
import Workflow from './component/workflow'
import Pricing from './component/pricing'
import Testimonials from './component/Testimonials'
import Footer from './component/footer'

function App() {
  return (
    <div className='dark:bg-slate-950'>
   <Navbar/>
   <Herosection /> 
   <Features />
   <Workflow/>
   <Pricing/>
   <Testimonials/>
   <Footer/>
   
   </div>
  )
}

export default App