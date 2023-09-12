import React, { Component } from 'react'
import News from '../components/News.js'

export class Health extends Component {
  render() {
    return (
      <div>
        <News apikey={this.props.apikey} category="health" className='flex justify-center' />
      </div>
    )
  }
}

export default Health
