import React from 'react'
import logo from './Head.png'
import './Cards.css'

const Card = ({name,education,skills,work}) => {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={require('./Head.png')}/>
        </div>
        <div className='card-contents'>
          <h2 className='name'>Name: {name}</h2>
          <h3>Education: <p>{education}</p></h3>
          <h3>Skills: <p>{skills}</p></h3>
          <h3>Work Experience: <p>{work}</p></h3>
        </div>
    </div>
  )
}

export default Card