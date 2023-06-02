import React, { useEffect, useState } from 'react'
import './Timeline.scss'

export default function Timeline() {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
    }, []);




  return (


	<div className="container">
        
		<ul className={scroll ? 'timeline visible': 'timeline'}>
			<li className={scroll ? 'timelineItem visible': 'timelineItem'}>
				<h3 className='timelineTitle'>April 20th 1889</h3>
				<p className='timelineInfo'>Adolf Schickelgruber, now known as Adolf Hitler, was born</p>
			</li>
            <li className={scroll ? 'timelineItem visible': 'timelineItem'}>
				<h3 className='timelineTitle'>1907</h3>
				<p className='timelineInfo'> Hitler decides to persue his artistic career and moves to Vienna to do so</p>
			</li>
            <li className={scroll ? 'timelineItem visible': 'timelineItem'}>
				<h3 className='timelineTitle'>1914</h3>
				<p className='timelineInfo'>At the cusp of the World War 1, a 25 year old Adolf Hitler voulenteers for the German military</p>
			</li>
            <li className={scroll ? 'timelineItem visible': 'timelineItem'}>
				<h3 className='timelineTitle'>1921</h3>
				<p className='timelineInfo'> After being discharged from the military and entering political spheres Hitler challenges Anton Drexler, the reigning leader of the nazi party, for his spot and wins</p>
			</li>
            <li className={scroll ? 'timelineItem visible': 'timelineItem'}>
				<h3 className='timelineTitle'>1923</h3>
				<p className='timelineInfo'> The nazis attempt to march through the streets but get open fired on and Hitler is captured</p>
			</li>
            <li className={scroll ? 'timelineItem visible': 'timelineItem'}>
				<h3 className='timelineTitle'>1933</h3>
				<p className='timelineInfo'> Hitler is appointed chancellor of a coalition government and the Nazs now hold 1/3rd of the seats in the Reichstag</p>
			</li>
            <li className={scroll ? 'timelineItem visible': 'timelineItem'}>
				<h3 className='timelineTitle'>June 30th 1934</h3>
				<p className='timelineInfo'>This is the start of the night of the long knives where Hitler systematically executed all his political opponents. This was the event leading up to World War 2</p>
			</li>
            <li className={scroll ? 'timelineItem visible': 'timelineItem'}>
				<h3 className='timelineTitle'>July 1934</h3>
				<p className='timelineInfo'>Hitler offically becomes Führer after the death of President Hindenburg</p>
			</li>
            <li className={scroll ? 'timelineItem visible': 'timelineItem'}>
				<h3 className='timelineTitle'>September 1st, 1939</h3>
				<p className='timelineInfo'> After a series of events which turned everyone but a handful of countries against Germany, World War 2 offically begins.</p>
			</li>
            <li className={scroll ? 'timelineItem visible': 'timelineItem'}>
				<h3 className='timelineTitle'>April 26th 1945</h3>
				<p className='timelineInfo'> WW2 is essentially over as Germany falls and is all but defeated in a 10 year long war that started just 25 years after the first.</p>
			</li>
            <li className={scroll ? 'timelineItem visible': 'timelineItem'}>
				<h3 className='timelineTitle'>April 30th 1945</h3>
				<p className='timelineInfo'> Hitler ends his own life alongisde his wife whos bodies were both creamted before they could be found.</p>
			</li>
            
            
		</ul>
	</div>


  )
}
