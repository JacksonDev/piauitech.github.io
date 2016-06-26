import React from 'react';
import Helmet from 'react-helmet';
import d3 from 'd3';

// Styles
import styles from './Home.styl';

export default class Home extends React.Component {
  componentDidMount(){
    const data = [
      {
        name: 'Meteor',
      },
      {
        name: 'React',
      },
      {
        name: 'Stylus',
      },
      {
        name: 'WebSockets',
      },
    ]
    const settings = {
      containerWidth: window.innerWidth,
      containerHeight: window.innerHeight,
    };
    const radius = Math.min(settings.containerWidth, settings.containerHeight);
    const radii = {
      meOrbit: radius / 2.5,
    };

    const svg = d3
      .select(this.refs.container).append('svg')
      .attr('width', settings.containerWidth)
      .attr('height', settings.containerHeight)
      .attr('class', styles.HomeChart)
      .append('g')

    // Background
    svg
      .append('rect')
      .attr('width', settings.containerWidth)
      .attr('height', settings.containerHeight)
      .attr('x', 0)
      .attr('y', 0)
      .transition()
      .duration(1000)
      .style('fill', '#2b2b2b')

    const me = svg
      .append('g')
      .attr('transform', `translate(${settings.containerWidth/2}, ${settings.containerHeight/2})`)

    // Me
    me
      .append('circle')
      .attr('class', 'me')
      .attr('r', 0)
      .style('fill', 'rgba(255, 54, 98, 1)')
      .transition()
      .duration(1000)
      .delay(100)
      .attr('r', 70)

    // My orbit
    me
      .append('circle')
      .style('fill', 'none')
      .style('stroke', 'black')
      .attr('r', 0)
      .transition()
      .duration(1000)
      .delay(400)
      .attr('r', radii.meOrbit)

    me
      .append('text')
      .text('Piauí.tecnologia')
      .attr('dx', -55)
  }

  render(){
    return (
      <div className={styles.Home}>
        <Helmet title="Piauí.tecnologia"/>

        <div ref="container"/>
      </div>
    );
  }
};
