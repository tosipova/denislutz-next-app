import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />

        <title>CodeX - Personal Portfolio / Resume / CV / vCard Template</title>

        <meta name="description" content=" Personal Portfolio / Resume / CV / vCard Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicons/favicon-16x16.png" />

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet" />
        <link rel="stylesheet" href="css/bootstrap-custom.css" />
        <link rel="stylesheet" href="css/ionicons.min.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/simplebar.min.css" />
        <link rel="stylesheet" href="css/jquery.mb.YTPlayer.min.css" />

        <link rel="stylesheet" href="css/main.css" />

        <link id="color-scheme" rel="stylesheet" href="css/colors/main-red.css" />

        <link rel="stylesheet" href="css/custom.css" />
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/isotope.pkgd.min.js"></script>
        <script src="js/animatedModal.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/simplebar.min.js"></script>
        <script src="js/jquery.mb.YTPlayer.min.js"></script>
        <script src="js/particles.js"></script>
        <script src="js/main.js"></script>
      </Head>
      <div class="preloader">
        <div class="preloader-block">
          <div class="preloader-icon"><span class="loading-dot loading-dot-1"></span><span class="loading-dot loading-dot-2"></span><span class="loading-dot loading-dot-3"></span></div>
        </div>
      </div>
      <div class="main-wrapper">
        <header>
          <nav class="navbar d-md-block d-lg-none fixed-top mobile-navbar"><button class="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#mobileNavbarSupportedContent" aria-controls="mobileNavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="nav-btn">Menu</span></button>
            <div class="collapse navbar-collapse order-1" id="mobileNavbarSupportedContent">
              <ul class="navbar-nav mr-auto"></ul>
            </div>
          </nav>
          <nav class="sidebar" data-simplebar>
            <div class="sidebar-header"><a href="#home" data-scroll><img class="img-fluid sidebar-avatar" src="img/profile-avatar.jpg" alt="Profile avatar" /></a><span class="sidebar-name">Alex Smith</span>
              <p class="sidebar-status">Available for work</p>
            </div>
            <div class="sidebar-menu">
              <ul class="list-unstyled list-menu">
                <li><a class="nav-link" href="#home-area" data-scroll>Home</a></li>
                <li><a class="nav-link" href="#about-area" data-scroll>About</a></li>
                <li><a class="nav-link" href="#services-area" data-scroll>Services</a></li>
                <li><a class="nav-link" href="#portfolio-area" data-scroll>Portfolio</a></li>
                <li><a class="nav-link" href="#testimonials-area" data-scroll>Clients</a></li>
                <li><a class="nav-link" href="#blog-area" data-scroll>Blog</a></li>
                <li><a class="nav-link" href="#contact-area" data-scroll>Contact</a></li>
              </ul>
            </div>
          </nav>
        </header>

        {/* <MyComponent /> */}

        <div class="sections-wrapper">
          <section class="home-area element-cover-bg" id="home-area" style={{ backgroundImage: 'url(img/home.jpg)' }}>
            <div class="container h-100">
              <div class="row h-100 align-items-center justify-content-center">
                <div class="col-12 col-lg-8 home-content text-center">
                  <h1 class="home-name">Denis <span>Lutz</span></h1>
                  <h4 class="cd-headline clip home-headline">I’m a <span class="cd-words-wrapper single-headline"><b class="is-visible">Developer</b><b>Designer</b><b>Freelancer</b></span></h4>
                </div><a href="#about-area" data-scroll>
                  <div class="home-mouse">
                    <div class="mouse-shape">
                      <div class="mouse-wheel"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>


          <section class="single-section about-area" id="about-area">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="section-heading">
                    <h2 class="section-title">About me</h2>
                    <p class="section-description">Get to know me</p>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-12 col-lg-5 about-img"><img class="img-fluid img-thumbnail" src="img/about-img.jpg" alt="About Picture" /></div>
                <div class="col-12 col-lg-7 about-content">
                  <div class="content-block">
                    <h2 class="content-subtitle">Who am i?</h2>
                    <h6 class="content-title">I'm Alex Smith, a visual UX/UI Designer and Web Developer</h6>
                    <div class="content-description">
                      <p>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                    </div>
                    <address class="content-info">
                      <div class="row">
                        <div class="col-12 col-md-6 single-info"><span>Name:</span>
                          <p>Alex Smith</p>
                        </div>
                        <div class="col-12 col-md-6 single-info"><span>Email:</span>
                          <p><a href="mailto:daniel@example.com">alex@example.com</a></p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 col-md-6 single-info"><span>Age:</span>
                          <p>21</p>
                        </div>
                        <div class="col-12 col-md-6 single-info"><span>From:</span>
                          <p>Liverpool, UK</p>
                        </div>
                      </div>
                    </address><a class="btn content-download button-main button-scheme" href="#0" role="button">Download CV</a><a class="btn content-work button-main" data-scroll="" href="#portfolio-area" role="button">My Work</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="single-section alt-bg services-area" id="services-area">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="section-heading">
                    <h2 class="section-title">My Services</h2>
                    <p class="section-description">Services i offer to my clients</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="single-service"><i class="icon service-icon ion-logo-css3"></i>
                    <h6 class="service-title">Design Trends</h6>
                    <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                  <div class="single-service"><i class="icon service-icon ion-md-images"></i>
                    <h6 class="service-title">PSD Design</h6>
                    <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                  <div class="single-service"><i class="icon service-icon ion-logo-ionic"></i>
                    <h6 class="service-title">Customer Support</h6>
                    <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                  <div class="single-service mb-lg-0"><i class="icon service-icon ion-logo-wordpress"></i>
                    <h6 class="service-title">Web Development</h6>
                    <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                  <div class="single-service mb-md-0"><i class="icon service-icon ion-md-move"></i>
                    <h6 class="service-title">Fully Responsive</h6>
                    <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                  <div class="single-service mb-0"><i class="icon service-icon ion-ios-rocket"></i>
                    <h6 class="service-title">Branding</h6>
                    <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HIRE */}
          <section class="single-section element-cover-bg hire-area" id="hire-area" style={{ backgroundImage: 'url(img/hire.jpg)' }}>
            <div class="container">
              <div class="row row-custom">
                <div class="col-12 col-md-8 content-part">
                  <h1 class="hire-title">Let's work together!</h1>
                  <p class="hire-description">I am available for freelance projects. Hire me and get your project done.</p>
                </div>
                <div class="col-12 col-md-4 button-part"><a class="btn hire-btn button-main button-scheme" data-scroll="" href="#contact-area" role="button">Hire me</a></div>
              </div>
            </div>
          </section>


          {/* PORTFOLIO */}


          {/* TESTIMONIALS */}
          <section class="single-section testimonials-area alt-bg" id="testimonials-area">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="section-heading">
                    <h2 class="section-title">Testimonials</h2>
                    <p class="section-description">What my clients think about me</p>
                  </div>
                </div>
              </div>
              <div class="owl-carousel owl-theme">

                <div class="single-review"><i class="icon ion-md-quote review-icon"></i>
                  <p class="review-content">Daniel did an excellent creative job. Quick and professional. Highly recommended, and will definitely work with him again.</p><img class="client-avatar" src="img/client-1.jpg" alt="Review avatar" /><span class="client-name">Maria Wilson</span>
                </div>
                <div class="single-review"><i class="icon ion-md-quote review-icon"></i>
                  <p class="review-content">Daniel did an excellent creative job. Quick and professional. Highly recommended, and will definitely work with him again.</p><img class="client-avatar" src="img/client-2.jpg" alt="Review avatar" /><span class="client-name">John Santana</span>
                </div>
                <div class="single-review"><i class="icon ion-md-quote review-icon"></i>
                  <p class="review-content">Daniel did an excellent creative job. Quick and professional. Highly recommended, and will definitely work with him again.</p><img class="client-avatar" src="img/client-3.jpg" alt="Review avatar" /><span class="client-name">Julia Sakura</span>
                </div>
                <div class="single-review"><i class="icon ion-md-quote review-icon"></i>
                  <p class="review-content">Daniel did an excellent creative job. Quick and professional. Highly recommended, and will definitely work with him again.</p><img class="client-avatar" src="img/client-1.jpg" alt="Review avatar" /><span class="client-name">Maria Wilson</span>
                </div>
                <div class="single-review"><i class="icon ion-md-quote review-icon"></i>
                  <p class="review-content">Daniel did an excellent creative job. Quick and professional. Highly recommended, and will definitely work with him again.</p><img class="client-avatar" src="img/client-2.jpg" alt="Review avatar" /><span class="client-name">John Santana</span>
                </div>
                <div class="single-review"><i class="icon ion-md-quote review-icon"></i>
                  <p class="review-content">Daniel did an excellent creative job. Quick and professional. Highly recommended, and will definitely work with him again.</p><img class="client-avatar" src="img/client-3.jpg" alt="Review avatar" /><span class="client-name">Julia Sakura</span>
                </div>
              </div>
            </div>
          </section>

          {/* BLOG */}
          <section class="single-section blog-area" id="blog-area">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="section-heading">
                    <h2 class="section-title">My Blog</h2>
                    <p class="section-description">Check out my latest blog posts</p>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">

                <div class="col-12 col-sm-8 col-lg-4">
                  <div class="card single-post"><a class="post-img" href="#0"><img class="card-img-top" src="img/post-1.jpg" alt="Blog post" /><span class="content-date">15 Nov, 19</span></a>
                    <div class="card-body post-content"><a href="#0">
                      <h5 class="card-title content-title">Top tools for Photographers</h5>
                    </a>
                      <p class="card-text content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                      <div class="content-tags"><span class="tags-title">Tags:</span>
                        <ul class="list-unstyled list-inline tags-list">
                          <li class="list-inline-item"><a href="#0">Photography</a></li>
                          <li class="list-inline-item"><a href="#0">Freelance</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-8 col-lg-4">
                  <div class="card single-post"><a class="post-img" href="#0"><img class="card-img-top" src="img/post-2.jpg" alt="Blog post" /><span class="content-date">8 Aug, 19</span></a>
                    <div class="card-body post-content"><a href="#0">
                      <h5 class="card-title content-title">Take a tour of my office</h5>
                    </a>
                      <p class="card-text content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                      <div class="content-tags"><span class="tags-title">Tags:</span>
                        <ul class="list-unstyled list-inline tags-list">
                          <li class="list-inline-item"><a href="#0">Events</a></li>
                          <li class="list-inline-item"><a href="#0">Personal</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-8 col-lg-4">
                  <div class="card single-post"><a class="post-img" href="#0"><img class="card-img-top" src="img/post-3.jpg" alt="Blog post" /><span class="content-date">11 Dec, 18</span></a>
                    <div class="card-body post-content"><a href="#0">
                      <h5 class="card-title content-title">How i became a Web Designer</h5>
                    </a>
                      <p class="card-text content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                      <div class="content-tags"><span class="tags-title">Tags:</span>
                        <ul class="list-unstyled list-inline tags-list">
                          <li class="list-inline-item"><a href="#0">Web Design</a></li>
                          <li class="list-inline-item"><a href="#0">Freelance</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="single-section contact-area alt-bg" id="contact-area">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="section-heading">
                    <h2 class="section-title">Get in Touch</h2>
                    <p class="section-description">Feel free to contact me anytime</p>
                  </div>
                </div>
              </div>
              <div class="row">

                <div class="col-12">
                  <form class="contact-form" id="contact-form" action="php/contact.php">
                    <div class="row">
                      <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-name" type="text" name="name" placeholder="Name" required="" /></div>
                      <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email" type="email" name="email" placeholder="Email" required="" /></div>
                      <div class="col-12 form-group"><input class="form-control" id="contact-subject" type="text" name="subject" placeholder="Subject" required="" /></div>
                      <div class="col-12 form-group form-message"><textarea class="form-control" id="contact-message" name="message" placeholder="Message" rows="5" required=""></textarea></div>
                      <div class="col-12 form-submit"><button class="btn button-main button-scheme" id="contact-submit" type="submit">Send message</button>
                        <p class="contact-feedback"></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
              <footer class="footer-area single-section">
        <div class="container">
          <div class="row contact-info">
            <div class="col-12 col-sm-4">
              <div class="single-info"><i class="info-icon icon ion-md-map"></i>
                <p class="info-content"><a href="https://goo.gl/maps/2YAGiugG47VAS17g7" target="_blank">4155, Liverpool, United Kingdom.</a></p>
              </div>
            </div>
            <div class="col-12 col-sm-4">
              <div class="single-info"><i class="info-icon icon ion-md-call"></i>
                <p class="info-content"><a href="tel:+441632967704">+44 1632 967704</a></p>
              </div>
            </div>
            <div class="col-12 col-sm-4">
              <div class="single-info"><i class="info-icon icon ion-md-send"></i>
                <p class="info-content"><a href="mailto:alex@example.com">alex@example.com</a></p>
              </div>
            </div>
          </div>
          <div class="row mini-footer">
            <div class="social-medias col-12 col-lg-5"><a class="twitter" href="#0"><i class="icon ion-logo-twitter"></i></a><a class="instagram" href="#0"><i class="icon ion-logo-instagram"></i></a><a class="linkedin" href="#0"><i class="icon ion-logo-linkedin"></i></a><a class="youtube" href="#0"><i class="icon ion-logo-youtube"></i></a><a class="github" href="#0"><i class="icon ion-logo-github"></i></a><a class="facebook" href="#0"><i class="icon ion-logo-facebook"></i></a></div>
            <p class="copyright-notice col-12 col-lg-7">Copyright © 2019 CardX, all rights reserved. Developed by <a href="https://themeforest.net/user/exill" target="_blank">Exill</a>.</p>
          </div>
        </div>
      </footer>

        </div>
      </div>
    </div>
  )
}
