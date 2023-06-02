import { useEffect, useRef } from 'react';
import './TwoSide.scss'


function TwoSide() {
    
    const swipeRef = useRef(null)

    useEffect(() => {
        const swipe = swipeRef.current
        document.body.addEventListener("mousemove",(e)=>{
            var x = e.pageX+0.1;
            var width = swipe.getBoundingClientRect().width;
            swipe.style.setProperty("--swipeAmount",1-(x/width));
        })    
    })


    return (
    <>
        <div className="container" id="swipeContainer" style={{"--swipeAmount":"0.5"}} ref={swipeRef}>
            <div className="sidea side">
                <div className="content">
                    <h1 className='twoText' id='reality'><span style={{display: "inline-block", width: "310px"}}></span>Reality</h1>
                    <p id='Ap' className='twoText'>
                        While communism was a danger it was extremly overblown
                    </p>
                </div>
            </div>
            <div className="side sideb">
                <div className="content contentb">
                    <h1 className='heady'>Fear<span style={{display:"inline-block", width:"286px"}} className='twoText'/></h1>
                    <p className='twoText' id='Bp'>
                    The spread of communism would be rapid and destructive if not addressed
                    </p>
                </div>
            </div>
        </div>
    </>
    );
}

export default TwoSide;