import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import styles from "./carousel.module.scss";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const { title, code } = this.props.project;
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows={false}
        >
          {this.props.project.indices.map(index => (
            <div className={styles.main} key={`${code}${index}`}>
              <img
                src={`/images/${title}/1600/${code}${index}-1600.png`}
                alt="x"
                className={styles.mainImg}
              />
            </div>
          ))}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
        >
          {this.props.project.indices.map(index => (
            <div className={styles.main} key={index}>
              <img
                src={`/images/${title}/400/${code}${index}-400.png`}
                alt="x"
                className={styles.mainImg}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
