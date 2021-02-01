import React, { Component } from 'react'

import styles from './footer.module.scss'

class GlobalFooter extends Component {
  render() {
    return (
      <div className={`${styles.footerBar}`}>
        这是底部
      </div>
    )
  }
}

export default GlobalFooter