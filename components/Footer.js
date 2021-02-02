import React from 'react'
function Footer() {
  return (
    <footer className="footer-area single-section">
      <div className="container">
        <div className="row contact-info">
          <div className="col-12 col-sm-4">
            <div className="single-info"><i className="info-icon icon ion-md-map"></i>
              <p className="info-content"><a href="https://goo.gl/maps/2YAGiugG47VAS17g7" target="_blank">68165, Mannheim, Germany</a></p>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="single-info"><i className="info-icon icon ion-md-call"></i>
              <p className="info-content"><a href="tel:+441632967704">+49 1577 3678397</a></p>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="single-info"><i className="info-icon icon ion-md-send"></i>
              <p className="info-content"><a href="mailto:alex@example.com">jazz80@gmail.com</a></p>
            </div>
          </div>
        </div>
        <div className="row mini-footer">
          <div className="social-medias col-12 col-lg-5"><a className="twitter" href="#0"><i className="icon ion-logo-twitter"></i></a><a className="instagram" href="#0"><i className="icon ion-logo-instagram"></i></a><a className="linkedin" href="#0"><i className="icon ion-logo-linkedin"></i></a><a className="youtube" href="#0"><i className="icon ion-logo-youtube"></i></a><a className="github" href="#0"><i className="icon ion-logo-github"></i></a><a className="facebook" href="#0"><i className="icon ion-logo-facebook"></i></a></div>
          <p className="copyright-notice col-12 col-lg-7">Copyright © 2019 CardX, all rights reserved. Developed by <a href="https://themeforest.net/user/exill" target="_blank">Exill</a>.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;

