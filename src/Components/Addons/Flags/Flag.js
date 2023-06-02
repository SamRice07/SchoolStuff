import React from 'react'
import './Flag.scss'
import { gsap, Power3, Elastic } from "gsap";
import { useEffect } from 'react';




export default function Flag(props) {

    useEffect(() => {
        const tl = new gsap.timeline({ repeat: 0, repeatDelay: 2 });

        tl
          .addLabel('setup')
          .set('.center', { autoAlpha: 1 }, 'setup')
          .set('.got-flag', { yPercent: -100 }, 'setup')
          .set('.got-flag__front', { yPercent: 100 }, 'setup')
          .addLabel('fall', 'setup+=0.25')
          .to(['.got-flag', '.got-flag__front'], 2.5, { yPercent: 0, ease: Power3.easeIn }, 'fall')
          .to('.got-flag__backface', 2.5, { yPercent: 100, ease: Power3.easeIn }, 'fall')
          .to('.got-flag', 2, { y: 10, ease: Elastic.easeOut.config(1.25, 0.3)}, 'fall+=2.375')
    })

  return (
      <>
        <div className="center">
            <div className="got-flag"  style={{left: props.leftAmount}}>
                <img src="https://svgshare.com/i/tjk.svg" alt=""
                className="got-flag__front" />
                <img src="https://images.saymedia-content.com/.image/t_share/MTc1MDA5Njc1OTYyNzU0Nzky/shades-red-greensleeves.jpg" alt=""
                className="got-flag__backface" />
            </div>
        </div>
    </>
  )
}
