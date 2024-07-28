import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div id="footer">
      <div class="footerflex">
      <ul>
          <li className="li" id='id-1' ><Link to="/home">Home</Link></li>
          <li className="li" id='id-2' ><Link to="/about">About</Link></li>
          <li className="li" id='id-3' ><Link to="/nutrition">Nutrition</Link></li>
          <li className="li" id='id-3' ><Link to="/chat">Chat</Link></li>
          <li className="li" id='id-3' ><Link to="/meditation">Meditation</Link></li>
        </ul>
      </div>
      <div id="reserved">
        <p>© 2024 Wellnesswave. All Rights Reserved</p>
      </div>
    </div>
    </>
  )
}

export default Footer
