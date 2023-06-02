import React from 'react'
import Caroseul from '../Addons/Caroseul/Caroseul'
import './Connection.scss'
import Dropdown from '../Addons/Dropdown/Dropdown'
import Cards from '../Addons/Cards/Cards'
import { useEffect } from 'react'
import $ from 'jquery'
import Sources from '../Addons/Sources/Sources'

export default function Connection() {

  useEffect(() => {
    $('.cardsHolder').addClass('fadein');
  }, [])

  return (
    <>

    <div className='dropdown'>
      <Dropdown title='The Crucible' subtitle='Salem Witch Trials'/>
    </div>

      
    <div className='connectionWrapper'> 
      <div className='connectionCard'>
        <div className='cardsHolder'>
          <Cards />
        </div>
      </div>    
    </div>

    </>
  )
}
