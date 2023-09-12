import React, { Component } from 'react'
import News from '../components/News.js'

export class BusiNess extends Component {
  render() {
    return (
      <div>
        <News apikey={this.props.apikey} category="business" className='flex justify-center' />
      </div>
    )
  }
}

export default BusiNess
