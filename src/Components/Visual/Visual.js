import React, { useState } from 'react'
import './Visual.scss'
import Dropdown from '../Addons/Dropdown/Dropdown'
import CharCard from '../Addons/CharCards/CharCard'
import Modal from 'react-modal'




export default function Visual() {

  const [headModal, setHead] = useState(false)
  const [torsoModal, setTorso] = useState(false)
  const [lArmModal, setlArm] = useState(false)
  const [rArmModal, setrArm] = useState(false)
  const [lLegModal, setlLeg] = useState(false)
  const [rLegModal, setrLeg] = useState(false)

  function openHead(){
    setHead(true)
  }
  function closeHead(){
    setHead(false)
  }
  
  function openTorso(){
    setTorso(true)
  }
  function closeTorso(){
    setTorso(false)
  }

  function openlArm(){
    setlArm(true)
  }
  function closelArm(){
    setlArm(false)
  }

  function openrArm(){
    setrArm(true)
  }
  function closerArm(){
    setrArm(false)
  }

  function openlLeg(){
    setlLeg(true)
  }
  function closelLeg(){
    setlLeg(false)
  }

  
  function openrLeg(){
    setrLeg(true)
  }
  function closerLeg(){
    setrLeg(false)
  }
  return (
    <>
        <div className='dropdown'>
            <Dropdown title='Visual Product' subtitle='Me'/>
        </div>
        
        
        <div className='gatsbyWrapper'>
            <div className='gatsbyCard'>
              <div className='man'>
                <img id='head' src='https://i.imgur.com/dDAvB5I.png' onClick={openHead}/>
                <img id='torso' src='https://i.imgur.com/UFyEuZ4.png' onClick={openTorso}/>
                <img id='left_arm' src='https://i.imgur.com/HvIuGse.png' onClick={openlArm}/>
                <img id='right_arm' src='https://i.imgur.com/uVDQhga.png' onClick={openrArm}/>
                <img id='left_leg' src='https://i.imgur.com/a8xYEmh.png'/>
                <img id='right_leg' src='https://i.imgur.com/a8xYEmh.png'/>
              </div>

              <Modal
              isOpen={headModal}
              onRequestClose={closeHead}
              overlayClassName={{
                base: "overlay-base",
                afterOpen: "overlay-after",
                beforeClose: "overlay-before"
              }}
              className={{
                base: "content-base",
                afterOpen: "content-after",
                beforeClose: "content-before"
              }}
              closeTimeoutMS={500}
              >
                <button onClick={closeHead} id="closeModal">X</button>
                <div id='logic'>
                  <img src='https://m.media-amazon.com/images/I/51ye9kMD62L.png' id='brain' />
                </div>
              </Modal>


              <Modal
              isOpen={torsoModal}
              onRequestClose={closeTorso}
              overlayClassName={{
                base: "overlay-base",
                afterOpen: "overlay-after",
                beforeClose: "overlay-before"
              }}
              className={{
                base: "content-base",
                afterOpen: "content-after",
                beforeClose: "content-before"
              }}
              closeTimeoutMS={500}
              >
                <button onClick={closeTorso} id="closeModal">X</button>
                <div id='craziness'>
                  <h1>Ukraine Vs Russia</h1>
                  <h1>Politics</h1>
                  <h1>Social Media</h1>
                  <h1>Crime Rates</h1>
                  <h1 style={{color: 'white'}}>AI Revolution</h1>
                  <h1>School Shootings</h1>
                  <h1>Freedom</h1>
                  <h1>Racism</h1>
                  <h1>Misinformation</h1>
                </div>
              </Modal>
              

              <Modal
                  isOpen={lArmModal}
                  onRequestClose={closelArm}
                  overlayClassName={{
                    base: "overlay-base",
                    afterOpen: "overlay-after",
                    beforeClose: "overlay-before"
                  }}
                  className={{
                    base: "content-base",
                    afterOpen: "content-after",
                    beforeClose: "content-before"
                  }}
                  closeTimeoutMS={500}
                >
                <button onClick={closelArm} id="closeModal">X</button>
                <div id='cons'>
                  <h1>Ai has the potential to become uncontrollable</h1>
                  <h1>The multitude of undiscovered reprecussions of AI</h1>
                  <h1>AI could take over the job market</h1>
                  <h1>Will AI always listen to us?</h1>
                </div>
              </Modal>  

              <Modal
                  isOpen={rArmModal}
                  onRequestClose={closerArm}
                  overlayClassName={{
                    base: "overlay-base",
                    afterOpen: "overlay-after",
                    beforeClose: "overlay-before"
                  }}
                  className={{
                    base: "content-base",
                    afterOpen: "content-after",
                    beforeClose: "content-before"
                  }}
                  closeTimeoutMS={500}
                >
                <button onClick={closerArm} id="closeModal">X</button>
                <div id='pros'>
                  <h1>AI could save lives</h1>
                  <h1>AI could pull people out of poverty</h1>
                  <h1>AI could complete tasks that would take humans years in months</h1>
                  <h1>AI is not nearly advanced enough to be a threat</h1>
                  <h1>AI could make advances humans wouldn't have thought of</h1>
                </div>
              </Modal>  
            </div>
        </div>
  </>
  )
}
