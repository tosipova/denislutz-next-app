import React from 'react'
function Blog() {
  return (
    <>
      <section className="single-section blog-area" id="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h2 className="section-title">My Blog</h2>
                <p className="section-description">Check out my latest blog posts</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">

            <div className="col-12 col-sm-8 col-lg-4">
              <div className="card single-post"><a className="post-img" href="https://medium.com/@denlutz/sap-commerce-hybris-integration-tests-without-platform-restart-and-for-free-83471d069650" target="_blank"><img className="card-img-top" src="https://miro.medium.com/max/2100/0*3rM_iXKxeCI2nz6j" alt="Blog post" /><span className="content-date">15 Nov, 19</span></a>
                <div className="card-body post-content"><a href="https://medium.com/@denlutz/sap-commerce-hybris-integration-tests-without-platform-restart-and-for-free-83471d069650" target="_blank">
                  <h5 className="card-title content-title">SAP Commerce ( Hybris ) integration tests without platform restart and for free</h5>
                </a>
                  <p className="card-text content-description">One of the most effective things you can do in your SAP Commerce project is to build up a profound integration tests suite. </p>
                  <div className="content-tags"><span className="tags-title">Tags:</span>
                    <ul className="list-unstyled list-inline tags-list">
                      <li className="list-inline-item">SAP Hybris</li>
                      <li className="list-inline-item">Freelance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-8 col-lg-4">
              <div className="card single-post"><a className="post-img" href="https://medium.com/@denlutz/sap-commerce-hybris-integration-tests-without-platform-restart-and-for-free-83471d069650" target="_blank"><img className="card-img-top" src="https://miro.medium.com/max/2100/0*2Awux-oqNUeEDB-y" alt="Blog post" /><span className="content-date">24  June, 19</span></a>
                <div className="card-body post-content"><a href="https://medium.com/@denlutz/sap-commerce-hybris-integration-tests-without-platform-restart-and-for-free-83471d069650" target="_blank">
                  <h5 className="card-title content-title">8 steps to radically speed up your react projects</h5>
                </a>
                  <p className="card-text content-description">In the following series of articles I want to tell about my experience and the best practices I discovered and/or introduced in react.js projects. </p>
                  <div className="content-tags"><span className="tags-title">Tags:</span>
                    <ul className="list-unstyled list-inline tags-list">
                      <li className="list-inline-item">REACT Projects</li>
                      <li className="list-inline-item">Freelance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-8 col-lg-4">
              <div className="card single-post"><a className="post-img" href="https://miro.medium.com/max/2100/0*kMi7aoqv0_FoVtSK"><img className="card-img-top" src="https://miro.medium.com/max/2100/0*kMi7aoqv0_FoVtSK" alt="Blog post" /><span className="content-date">24 June, 19</span></a>
                <div className="card-body post-content"><a href="#0">
                  <h5 className="card-title content-title">Introduce an opinionated react front end architecture</h5>
                </a>
                  <p className="card-text content-description">React is a library, not a framework</p>
                  <div className="content-tags"><span className="tags-title">Tags:</span>
                    <ul className="list-unstyled list-inline tags-list">
                      <li className="list-inline-item">Architecures</li>
                      <li className="list-inline-item">Freelance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

      
          </div>
        </div>
      </section>

      <section className="single-section contact-area alt-bg" id="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-description">Feel free to contact me anytime</p>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-12">
              <form className="contact-form" id="contact-form" action="php/contact.php">
                <div className="row">
                  <div className="col-12 col-md-6 form-group"><input className="form-control" id="contact-name" type="text" name="name" placeholder="Name" required="" /></div>
                  <div className="col-12 col-md-6 form-group"><input className="form-control" id="contact-email" type="email" name="email" placeholder="Email" required="" /></div>
                  <div className="col-12 form-group"><input className="form-control" id="contact-subject" type="text" name="subject" placeholder="Subject" required="" /></div>
                  <div className="col-12 form-group form-message"><textarea className="form-control" id="contact-message" name="message" placeholder="Message" rows="5" required=""></textarea></div>
                  <div className="col-12 form-submit"><button className="btn button-main button-scheme" id="contact-submit" type="submit">Send message</button>
                    <p className="contact-feedback"></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Blog;