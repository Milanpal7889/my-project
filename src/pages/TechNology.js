import React, { Component } from 'react'
import News from '../components/News.js'

export class TechNology extends Component {
  render() {
    return (
      <div>
           <News apikey={this.props.apikey} category="technology" className='flex justify-center' />
      </div>
    )
  }
}

export default TechNology
