import React from 'react'

function Services (){
    return (
<section className="single-section alt-bg services-area" id="services-area">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-heading">
          <h2 className="section-title">My Services</h2>
          <p className="section-description">Services I offer to my clients</p>
        </div>
      </div>
    </div>
    <div className="row">
      {/* Single service*/}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="single-service"><i className="icon service-icon ion-logo-css3" />
          <h6 className="service-title">Java Stack</h6>
          <p className="service-description">Java, Groovy, Spring, MVC–Frameworks, OR–Mapper, Ant, Gradle, Maven</p>
        </div>
      </div>
      {/* Single service*/}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="single-service"><i className="icon service-icon ion-md-images" />
          <h6 className="service-title">Javascript stack</h6>
          <p className="service-description">Javascript, React.js, Node.js, SAP–UI, NPM, Webpack, YARN</p>
        </div>
      </div>
      {/* Single service*/}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="single-service"><i className="icon service-icon ion-logo-ionic" />
          <h6 className="service-title">E–Commerce</h6>
          <p className="service-description">Hybris, csv data imports and generation, API integrations, UI–UX, SEO, Spree–Commerce</p>
        </div>
      </div>
      {/* Single service*/}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="single-service mb-lg-0"><i className="icon service-icon ion-logo-wordpress" />
          <h6 className="service-title">IOs stack</h6>
          <p className="service-description">Objective–C, IOs–Framework, CocoaPods, Calabash</p>
        </div>
      </div>
      {/* Single service*/}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="single-service mb-md-0"><i className="icon service-icon ion-md-move" />
          <h6 className="service-title">Concepts</h6>
          <p className="service-description">TDD, api borders, clean code, Microservices, DDD, DSL, DesignbyContract, YAGNI, REST</p>
        </div>
      </div>
      {/* Single service*/}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="single-service mb-0"><i className="icon service-icon ion-ios-rocket" />
          <h6 className="service-title">CI/CD</h6>
          <p className="service-description">Jenkins, Bamboo, Gitflow, GIT, Groovy</p>
        </div>
      </div>
    </div>
    </div>
</section>
    )}
    export default  Services