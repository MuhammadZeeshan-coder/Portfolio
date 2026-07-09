import React from 'react'
import Navbar from './Layout/Navbar'
import Header from './Widgets/Header'
import HeaderBg from './assets/hero-bg.png'
import Project from './Widgets/Project'
import TechStack from './Widgets/TechStack'
import Service from './Widgets/Service'
import About from './Widgets/About'
import Contact from './Widgets/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <div
        className='bg-cover pt-24'
        style={{ backgroundImage: `url(${HeaderBg})` }}>
        <Header />
      </div>
      <Project />
      <TechStack />
      <About />
      <Service />
      <Contact />
    </div>
  )
}

export default App