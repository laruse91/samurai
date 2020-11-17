import React from 'react';
import style from './Footer.module.css'

class Footer extends React.Component {

  render() {
    return (
        <footer className={style.footer}>
          <div className={style.footerBlock}>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
          <div className={style.footerBlock}>
            <span> Copyright 2020</span>
            <span>All Rights Reserved</span>
          </div>
      </footer>
    )
  }
};

export default Footer;