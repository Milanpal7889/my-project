import React, { Component } from 'react'
import loading from './img/22.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='align-middle'>
        <img src={loading} alt="loading" />        
      </div>
    )
  }
}

export default Spinner
