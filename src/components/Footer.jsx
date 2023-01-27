import React from 'react'
// import { Navigate, redirect } from 'react-router-dom'

const Footer = () => {
  // const navigate = Navigate()
  return (
      <>
      <div style={{height:'15px'}}></div>
    <footer>
       <div className='footer-nav'>
       <a href='https://resolve-query.shashankj.tech/' target='_blank'>
       
        Report Bug 
        </a>
        </div>
        
        
        <div className='footer-nav'> 
        <a href='https://resolve-query.shashankj.tech/#contactDev-form' target='_blank'>

            Contact Developer
        </a>
            </div> 
    </footer>
    </>
  )
}

export default Footer