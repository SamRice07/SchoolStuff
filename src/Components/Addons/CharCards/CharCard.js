import React from 'react'
import './CharCard.scss'

export default function CharCard() {
  return (
    <>
        <div class="wrapper">



            <div class="charCard-wrapper">
            <div class="charCard">
                <div class="charCard-inner">
                <div class="charCard-info">
                    <h1 class="title">Sam Altman</h1>
                    <p class="sub-title">In a meeting with congress Sam Altman, the CEO of OpenAI dramatically stated "AI will probably most likely lead to the end of the world."</p>
                </div>
                <div class="charCard-media">
                    <img src="https://i.imgur.com/ou1ldJu.png" class="charCard-img Gatsby" />
                </div>
                </div>

            </div>

            <div class="charCard">
                <div class="charCard-inner">
                <div class="charCard-info">
                    <h1 class="title">Rodney Brooks</h1>
                    <p class="sub-title">In an article by Rodney Brooks he argued "Artificial intelligence is a tool, not a threat."</p>
                </div>
                <div class="charCard-media">
                    <img src="https://i.imgur.com/nYYCJeP.png" class="charCard-img Tom" />
                </div>
                </div>

            </div>

            </div>

        </div>


    </>
  )
}
