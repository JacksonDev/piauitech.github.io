import React from 'react'
import 'particles.js'
import { componentDidMount } from 'react-lifecycle-hoc'

function Hero(){
  return (
    <div id="hero-wrapper">
     	<div id="particles-js">
     		<h1>piauí.tech</h1>
     	</div>
    </div>
  )
}

export default componentDidMount(
  () => {
    /* eslint-disable no-undef */
    particlesJS('particles-js', require('./particles-config.json'));
    /* eslint-enable no-undef */
  }
)(Hero)