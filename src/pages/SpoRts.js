import React, { Component } from 'react'
import News from '../components/News.js'

export class SpoRts extends Component {
  render() {
    return (
      <div>
        <News apikey={this.props.apikey} category="sports" className='flex justify-center' />
      </div>
    )
  }
}

export default SpoRts
