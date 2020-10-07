import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'
import offspring from './db.js'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: 138
    }
  }

  
  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  colorImageMatcher = () => {
    let currentColor = this.props.eyeColor
    let eyeColorMapper = {
      blue: BlueBaby,
      sun: SunBaby,
      glowing: GlowingBaby
    }
    switch (currentColor) {
      case 'blue':
        return eyeColorMapper.blue
       // break;
      case 'sun':
        return eyeColorMapper.sun
       // break;
      case 'glowing':
        return eyeColorMapper.glowing
       // break;
    }
    //alternative to switch case
    // if(this.props.eyeColor === 'blue'){
    //   return eyeColorMapper.blue
    // }
    // else if (this.props.eyeColor === 'sun'){
    //   return eyeColorMapper.sun
    // }
    // else if (this.props.eyeColor === 'glowing'){
    //   return eyeColorMapper.glowing
    // }
  }
  
  render() {
    return (
      <li className="hogbabies">
        <h1>{this.props.name}</h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby: {this.props.hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>
        
        <Button name="+" onClick={this.changeWeight}>
          Increase Weight
        </Button>
        <Button name="-" onClick={this.changeWeight}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={this.colorImageMatcher()} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>
      </li>
    )
  }
}
