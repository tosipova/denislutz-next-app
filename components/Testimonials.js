import React from 'react'
function Testimonials() {
  return (
    <section className="single-section testimonials-area alt-bg" id="testimonials-area">

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h2 className="section-title">Testimonials</h2>
              <p className="section-description">What my clients think about me</p>
            </div>
          </div>
        </div>
        <div className="owl-carousel owl-theme">

          <div className="single-review"><i className="icon ion-md-quote review-icon"></i>
            <p className="review-content"> Denis and I worked together, he  is very detail oriented, structured and strives for  an excellence in  everything.</p><img className="client-avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQGNyAQAAukfJQ/profile-displayphoto-shrink_400_400/0/1516884888749?e=1617840000&v=beta&t=QNQjHYpVfjrZ9WqvbEz9gBWFmS2FdLWXksVzmJ-NIn8" alt="Review avatar" /><span className="client-name">Manuel Richarz</span>
          </div>
          <div className="single-review"><i className="icon ion-md-quote review-icon"></i>
            <p className="review-content"> I worked with Denis on several  projects. He is very innovative, strong programmer, he has a perfect eye for details and design.</p><img className="client-avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQFHS1seHTSGhQ/profile-displayphoto-shrink_400_400/0/1517731555646?e=1617840000&v=beta&t=tbGMNJIltDinQZg5jUe1zw5pMoyAg29LqgMA3pj5LqU" alt="Review avatar" /><span className="client-name">Daniel Seidler</span>
          </div>
          <div className="single-review"><i className="icon ion-md-quote review-icon"></i>
            <p className="review-content"> Denis's technical expertise made him an essential part in the project and also a reliable team player. He is motivated and ambitious.</p> <img className="client-avatar" src="https://media-exp1.licdn.com/dms/image/C4D03AQGkDV1jm8cKBQ/profile-displayphoto-shrink_400_400/0/1516260867571?e=1617840000&v=beta&t=YAn4CyQwx4p_EUlPtMN5ddmankM29H_OPayFql0UIyw" alt="Review avatar" /><span className="client-name">Wolfgang Frank </span>
          </div>
        
        </div>
      </div>
    </section>
  )
}
export default Testimonials