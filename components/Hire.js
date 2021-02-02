import React from 'react'

function Hire() {
  return (
    <section className="single-section element-cover-bg hire-area" id="hire-area" style={{ backgroundImage: 'url(img/hire.jpg)' }}>
      <div className="container">
        <div className="row row-custom">
          <div className="col-12 col-md-8 content-part">
            <h1 className="hire-title">Let's work together!</h1>
            <p className="hire-description">I am available for freelance projects. Hire me and get your project done.</p>
          </div>
          <div className="col-12 col-md-4 button-part"><a className="btn hire-btn button-main button-scheme" data-scroll="" href="#contact-area" role="button">Hire me</a></div>
        </div>
      </div>
    </section>
  )
}

export default Hire;