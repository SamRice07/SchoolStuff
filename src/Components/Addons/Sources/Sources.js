import React from 'react'
import './Sources.scss'

export default function Sources() {

    

  return (
    <>

        <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet" />
        
        <div className='sourceWrapper'>
            <button class="noselect" id='sourceBtn' onClick={() => {
                window.open('https://docs.google.com/document/d/19vIQtlIRiRPpvVyWvmt8rxjO1LuTf-hl1RUTVgP_IdA/edit?usp=sharing', '_blank');
            }}>Sources</button>
        </div>
  
    </>
  )
}
