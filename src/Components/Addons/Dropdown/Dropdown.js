import React, { useState } from 'react'
import * as AIcons from 'react-icons/ai'
import './Dropdown.scss'

export default function Dropdown(props) {

  const [clicked, setClicked] = useState(false)


  function toggleActive(){
    setClicked(!clicked)
  }



  return (
  <>
  
  <div  className={clicked ? "card card__active" : 'card'} onClick={toggleActive}>
    <div  className="card__content">
      <div  className="card__imageBox">
        <img  className="card__image" src="https://static.vecteezy.com/system/resources/previews/004/100/791/original/human-head-brain-free-vector.jpg" alt="woman" />
      </div>
      <h2  className="card__title">{props.title}
        <br />
        <span  className="card__subtitle">{props.subtitle}</span>
      </h2>
    </div>
    <ul  className="card__navigation">
      <li  className="card__list">
        <a  className="card__link" href="/">
          My Identity
        </a>
      </li>
      <li  className="card__list">
        <a  className="card__link" href="/RedScare">
          The Red Scare
        </a>
      </li>
      <li  className="card__list">
        <a  className="card__link" href="/crucible">
          The Crucible
        </a>
      </li>
      <li  className="card__list">
        <a  className="card__link" href="/AI">
        AI
        </a>
      </li>
      <li  className="card__list">
        <a  className="card__link" href="/Chat">
        ChatGPT
        </a>
      </li>
      <li  className="card__list">
        <a  className="card__link" href="/Visual">
        Visual
        </a>
      </li>
      <li  className="card__list">
        <a  className="card__link" href="/Synthesis">
        Synthesis
        </a>
      </li>
    </ul>
    <div  className="card__toggle" >
      <div className='arrow'>
        <AIcons.AiOutlineArrowDown /> 
      </div>
    </div>


  </div>
  </>
  
  )
}


