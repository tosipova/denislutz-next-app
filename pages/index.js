import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Hire from '../components/Hire'
import SectionWraper from '../components/SectionWraper'
import Testimonials from '../components/Testimonials'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Preloader from '../components/Preloader'
import Services from '../components/Services'

function Home() {
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
        <script src="js/jquery.min.js" defer></script>
        <script src="js/bootstrap.bundle.min.js" defer></script>
        <script src="js/isotope.pkgd.min.js" defer></script>
        <script src="js/animatedModal.js" defer></script>
        <script src="js/owl.carousel.min.js" defer></script>
        <script src="js/simplebar.min.js" defer></script>
        <script src="js/jquery.mb.YTPlayer.min.js"defer></script>
        <script src="js/particles.js" defer></script>
        <script src="js/main.js" defer></script>
      </Head>
      < Preloader/>
      
     
      <div className="main-wrapper">
        <header>
          
          <nav className="navbar d-md-block d-lg-none fixed-top mobile-navbar"><button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#mobileNavbarSupportedContent" aria-controls="mobileNavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="nav-btn">Menu</span></button>
            <div className="collapse navbar-collapse order-1" id="mobileNavbarSupportedContent">
              <ul className="navbar-nav mr-auto"></ul>
            </div>
          </nav>
          <nav className="sidebar" data-simplebar>
            <div className="sidebar-header"><a href="#home" data-scroll><img className="img-fluid sidebar-avatar" src="img/profile-avatar.jpg" alt="Profile avatar" /></a><span className="sidebar-name">Alex Smith</span>
              <p className="sidebar-status">Available for work</p>
            </div>
            <div className="sidebar-menu">
              <ul className="list-unstyled list-menu">
                <li><a className="nav-link" href="#home-area" data-scroll>Home</a></li>
                <li><a className="nav-link" href="#about-area" data-scroll>About</a></li>
                <li><a className="nav-link" href="#services-area" data-scroll>Services</a></li>
                <li><a className="nav-link" href="#portfolio-area" data-scroll>Portfolio</a></li>
                <li><a className="nav-link" href="#testimonials-area" data-scroll>Clients</a></li>
                <li><a className="nav-link" href="#blog-area" data-scroll>Blog</a></li>
                <li><a className="nav-link" href="#contact-area" data-scroll>Contact</a></li>
              </ul>
            </div>
          </nav>
          
        </header>

        <SectionWraper />

        <About />
        <Services/>


        <Hire />


        {/* PORTFOLIO */}
        <Portfolio />


        {/* TESTIMONIALS */}
        <Testimonials />


        {/* BLOG */}
        <Blog />

        {/* FOOTER */}
        <Footer />

      </div>
    </div>

  )
}
export default Home;

