import React from 'react';
import Particles from 'react-particles-js';
import styles from './particle.module.scss';


export default () => {
  return (
    <Particles
          className={styles.container}
          params={{
          "particles": {
              "number": {
                  "value": 50
              },
            "color" : {
              "value": "22b0b0"
            },
              "size": {
                  "value": 2.5
              },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "22b0b0",
              "opacity": 0.6,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "out_mode": "bounce",
              "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
              }
            },
          },
          "interactivity": {
            "detect_on": "canvas",
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                }
              }
          }
      }}
    />
  )
}
