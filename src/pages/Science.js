import React, { Component } from 'react'
import News from '../components/News.js'

export class Science extends Component {
  render() {
    return (
      <div>
        <News apikey={this.props.apikey} category="science" className='flex justify-center' />
      </div>
    )
  }
}

export default Science
