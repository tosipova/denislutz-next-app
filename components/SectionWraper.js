import React from 'react'

function SectionWrapper() {
  return (
    <section className="home-area element-cover-bg" id="home-area" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1585362028211-dee1aba5fdd3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80)' }}>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 col-lg-8 home-content text-center">
            <h1 className="home-name">Denis <span>Lutz</span></h1>
            <h4 className="cd-headline clip home-headline">I’m a <span className="cd-words-wrapper single-headline"><b className="is-visible">Developer</b><b>Software Engineer</b><b>Freelancer</b></span></h4>
          </div><a href="#about-area" data-scroll>
            <div className="home-mouse">
              <div className="mouse-shape">
                <div className="mouse-wheel"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

  )
}
export default SectionWrapper