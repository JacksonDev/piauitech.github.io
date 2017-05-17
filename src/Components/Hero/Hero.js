import React from 'react'
import './hero.css'
import 'particles.js'
import { componentDidMount } from 'react-lifecycle-hoc'

class Hero extends React.Component{
  render(){
    return (
      <div class="hero-wrapper">
        <section class="hero">
          <div id="particles-js">
            <h1>piauí.tech</h1>
          </div>
        </section>
        <div id="particles-js"></div>

      </div>
      )
  }
}
export default componentDidMount(
  () => {
    /* eslint-disable no-undef */
    particlesJS('particles-js', require('./particlesjs-config.json'));
    /* eslint-enable no-undef */
  }
)(Hero)
