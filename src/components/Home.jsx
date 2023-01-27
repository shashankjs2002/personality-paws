import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage.png'

const Home = () => {
  localStorage.setItem('stage', 'home')
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const submitName = (e) => {
    e.preventDefault();
    localStorage.setItem('stage', 'q')
    localStorage.setItem('username',username)
    localStorage.setItem('qNo', 1)
    localStorage.setItem('n',Math.floor(Math.random() * 4))
    localStorage.setItem('m',Math.floor(Math.random() * 7))
    localStorage.setItem('o',Math.floor(Math.random() * 7))
    localStorage.setItem('lang',0)
    localStorage.setItem('toggle','right')
    localStorage.setItem('switch','checked')
    
    navigate('/q/1')
  }
  
  const onchange = (e) => {
    setUsername(e.target.value)
  }
  
  return (
    <div className="mid">
    <div className="content">
    <div className='home'>
      
        <p>Find out which creature best represents your personality with Personality Paws!</p>
        <div>
          {/* <p>Enter Your Name</p> */}
          <img src={HomePage} style={{width: '90%'}}  />
            <p>Answer 10 questions to know your Animal Match!</p>
        </div>
         {/* <!-- Call-to-action button --> */}
         <form className="d-flex" role="search">
        <input className="form-control me-2" name='username' value={username} onChange={onchange} type='text' placeholder="Enter Your Name"/>
        <button className="btn btn-outline-success" onClick={submitName} style={{minWidth: "96px"}}>Start Quiz</button>
      </form>

      {/* <ins className="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-6847172398832884"
        data-ad-slot="4979889589"
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
     <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
    </script> */}
    </div>
    {/* //mordoops.com/4/5652833
    //nossairt.net/4/5652834 */}
    </div>
    </div>
  )
}

export default Home