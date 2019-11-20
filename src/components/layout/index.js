import React, {Fragment} from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import layoutStyles from './layout.module.scss'

export default (props) => (
  <Fragment>
    <Navbar />
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        {props.children}
      </div>
      <Footer />
    </div>
  </Fragment>
)
