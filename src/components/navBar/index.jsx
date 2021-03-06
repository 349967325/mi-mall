import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { dicoverMenu } from '@/common/localdatas/localdatas'

import styles from './index.module.scss'

export default memo(function NavBar (props) {
  return (
    <div className={`${styles.navBar}`}>
      <div className={`w1100 ${styles.navWrap}`}>
        <div className={`${styles.navContainer}`}>
          {
            dicoverMenu.map((dicitem, index) => (
              <NavLink
                key={`subnavLink-${index}`}
                className={`${styles.navItem}`} to={{ pathname: dicitem.link }}
                activeClassName={styles.menuActive}
              >
                <em>{dicitem.title}</em>
              </NavLink>
            ))
          }
        </div>
      </div>
    </div>
  )
})
