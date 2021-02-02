import React from 'react';

function About() {
    return (
<section className="single-section about-area" id="about-area">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-heading">
          <h2 className="section-title">Über mich</h2>
        </div>
      </div>
    </div>
    <div className="row align-items-center">
      {/* Picture part*/}
      <div className="col-12 col-lg-5 about-img"><img className="img-fluid img-thumbnail" src="https://media-exp1.licdn.com/dms/image/C5603AQFMQ2Wr2BNPOA/profile-displayphoto-shrink_800_800/0/1607857177521?e=1617840000&v=beta&t=zoeVk0OJR8RcMSW8veC5pxamTLDEQ2T3uiUgLL7e2zo" alt="About Picture" /></div>
      {/* Content part*/}
      <div className="col-12 col-lg-7 about-content">
        <div className="content-block">
          <h2 className="content-subtitle">Hallo! Ich bin Denis Lutz.</h2>
          <h6 className="content-title">Ein freiberuflicher Softwareentwickler.</h6>
          <div className="content-description">
            <p>
              Motiviert und erfahren durch jahrelangen Projekteinsatz bei Agenturen, Konzernen und Startups. International geprägt durch Auslandserfahrung und enthusiastisch über eigenen Beruf.
              Ich vertrete ständiges Lernen, handwerker Mentalität, pragmatisches Vorgehen, Fokus auf ROI, Anwenden von Wissen aus 4 Technologischen Stacks sowie einige spezial Interessen, die mich zu einem
              starken und sozialem Mitglied in jedem Team machen. 
            </p>
          </div>
          <address className="content-info">
            <div className="row">
              <div className="col-12 col-md-6 single-info"><span>Name:</span>
                <p>Denis Lutz</p>
              </div>
              <div className="col-12 col-md-6 single-info"><span>Email:</span>
                <p><a href="mailto:daniel@example.com">denis.lutz@gmail.com</a></p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 single-info"><span>Education:</span>
                <p>Universität Mannheim, Deutschland</p>
              </div>
              <div className="col-12 col-md-6 single-info"><span>From:</span>
                <p>Mannheim, Germany</p>
              </div>
            </div>
          </address><a className="btn content-download button-main button-scheme" href="#0" role="button">Download CV</a><a className="btn content-work button-main" data-scroll href="#portfolio-area" role="button">My Work</a>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default About;