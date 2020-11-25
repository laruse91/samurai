import React from 'react';
import './Footer.css';

class Footer extends React.Component {

  render() {
    return (
        <footer className="footer">
          <div className="footerBlock">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
          <div className="footerBlock">
            <span> Copyright 2020</span>
            <span>All Rights Reserved</span>
          </div>
      </footer>
    )
  }
}

export default Footer;