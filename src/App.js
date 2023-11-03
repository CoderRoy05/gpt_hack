import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, Appsign, Appsignin } from './components';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Brand />
      <Routes>
            <Route path='/Appsign' element={<Appsign/>} />
            <Route path='/Appsignin' element={<Appsignin/>} />
            <Route path='/WhatGPT3' element={<WhatGPT3/>} />
            <Route path='/Possibility' element={<Possibility/>} />
            <Route path='/CTA' element={<CTA/>} />
            <Route path='/Blog' element={<Blog/>} />
          </Routes>
        <div className='gradient__bg'>
          {/* <Header /> */}
        </div>

        <Footer />
        
        
    </div>
  )
}

export default App;