import React, { Component } from 'react';
import News from '../components/News.js';

export class GeneRal extends Component {
  render() {
    return (
      <div>
        <News apikey={this.props.apikey} category="general" className='flex justify-center' />
      </div>
    );
  }
}

export default GeneRal;
