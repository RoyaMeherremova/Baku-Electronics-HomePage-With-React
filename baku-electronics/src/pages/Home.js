import React from 'react'
import Header from '../components/layout/Header'
import '../assets/home/home.scss'
import Main from '../components/Main'
function Home() {
  return (
    <div>
      <div className='container'>
            <header><Header/></header>
        <main>
       <Main/>
        </main>
        <footer></footer>
      </div>
    
  
    </div>
  )
}

export default Home
