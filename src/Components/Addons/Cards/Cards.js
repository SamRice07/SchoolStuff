import React from 'react'
import './Cards.scss'


export default function Cards() {
  return (
    <>
    <div class="container">
  <div class="card">
    <div class="image image1">
        <img src='https://static.wikia.nocookie.net/villains/images/4/41/Abigail_Williams_%28The_Crucible%29.jpg' />
    </div>
    <div className="info">
      <h2>Abigail Williams</h2>
      <p>"I want to open myself!...I want the light of God, I want the sweet love of Jesus! I danced for the Devil; I saw him, I wrote in his book;"(Miller 48) </p>
    </div>
  </div>
  <div class="card">
    <div class="image image2">
        <img src='https://schol.files.wordpress.com/2012/04/john.jpg' />
    </div>
    <div className="info">
      <h2>John Proctor</h2>
      <p>“We are what we always were in Salem, but now the little crazy children are jangling the keys of the kingdom, and common vengeance writes the law!”(Miller 73)</p>
    </div>
  </div>
</div>
    </>
  )
}
