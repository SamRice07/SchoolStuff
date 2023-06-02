import React from 'react'
import './Gatsby.scss'
import Dropdown from '../Addons/Dropdown/Dropdown'
import CharCard from '../Addons/CharCards/CharCard'

export default function Gatsby() {
  return (
    <>
        <div className='dropdown'>
          <Dropdown title='The AI Revolution' subtitle='Is The Fear Reasonable?'/>
        </div>
        
        
        <div className='gatsbyWrapper'>
            <div className='gatsbyCard'>

            <figure class="swing">
                <img src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/14202/production/_108243428_gettyimages-871148930.jpg" width="400" />
            </figure>  

            <figure class="swang">
                <img src="https://www.ibm.com/blog/wp-content/uploads/2023/03/What-is-Generative-AI-what-are-Foundation-Models-and-why-do-they-matter-scaled.jpg" width="500" />
            </figure>  
            <CharCard />

            </div>
        </div>
  </>
  )
}
