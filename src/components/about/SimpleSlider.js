import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../../img/about/slide-1.png';
import slide2 from '../../img/about/slide-2.png';
import './SimpleSlider.css';

import Button from '@material-ui/core/Button';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={slide1} alt="slide" />
            <h3>
              Skip two cells straight or one cell diagonally and try getting as close as possible to
              100
            </h3>
          </div>
          <div>
            <img src={slide2} alt="slide" />
            <h3>
              Do you think it's easy?
              <br />
              Try!
            </h3>
          </div>
        </Slider>
        <div className="play-button">
          <Link to="/">
            <Button variant="contained">Play</Button>
          </Link>
        </div>
      </div>
    );
  }
}
