import React, { Component } from 'react'
import './MovieCard.scss'

export default class MovieCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='card-container'>
        <div className='image-card' >
         <img src={this.props.path} alt="" />
        </div>
        <div className='movie-title'>
        <h2>{this.props.movieTitle}</h2>
        </div>
        <div className='movie-content'>
            <p>{this.props.media}</p>
            <p>{this.props.release}</p>
        </div>
        <div className='rating'>
            <h4>{this.props.rating}</h4>
        </div>
      </div>
    )
  }
}
