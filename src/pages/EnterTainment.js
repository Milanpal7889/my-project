import React, { Component } from 'react'
import News from '../components/News.js'

export class EnterTainment extends Component {
  render() {
    return (
      <div>
        <News apikey={this.props.apikey} category="entertainment" className='flex justify-center' />
      </div>
    )
  }
}

export default EnterTainment
