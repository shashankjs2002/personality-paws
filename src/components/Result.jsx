import React from 'react'
import { useNavigate } from 'react-router-dom'
import Canvas from './Canvas'
import { useEffect } from 'react'

const Result = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('stage') != 'result'){
      navigate('/')
    }  
  }, [])

  const resetQuiz = () => {
    localStorage.setItem('stage','home')
    navigate('/')
  }
  let username = localStorage.getItem('username')
  let text = `${username} is`;
  let animal = localStorage.getItem('animal')
  

  return (
    <div className="mid">
    <div className="content">
    <div>
        {/* Result */}
        <h2>Your Animal Soul is {animal[0].toUpperCase() + animal.substr(1)}.</h2>

        <Canvas username={username} text={text} animal={animal} />
          {/* <!-- Call-to-action button --> */}
      <div className="cta-button" style={{margin:'15px 0'}}>
        <button onClick={resetQuiz} >Take another quiz</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Result