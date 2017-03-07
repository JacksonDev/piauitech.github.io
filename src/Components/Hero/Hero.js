import React from 'react'
import 'particles.js'
import 'style.css'

function Hero(){
  return (
    <div id="hero-wrapper">
     	<article>
        <h1>piauí.tech</h1>
      </article>
      <div id="particles-js">
      <script src="particles.js"></script>
     </div>
    </div>
  )
}

export default Hero(
  () => {
    /* eslint-disable no-undef */
    particlesJS('particles-js', require('./particles-config.json'));
    /* eslint-enable no-undef */
  }
)