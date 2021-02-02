function Preloader(){
    return (
<div>
<div className="preloader">
<div className="preloader-block">
  <div className="preloader-icon"><span className="loading-dot loading-dot-1"></span><span className="loading-dot loading-dot-2"></span><span className="loading-dot loading-dot-3"></span></div>
</div>
</div>
<div className="main-wrapper">
<header>
  <nav className="navbar d-md-block d-lg-none fixed-top mobile-navbar"><button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#mobileNavbarSupportedContent" aria-controls="mobileNavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="nav-btn">Menu</span></button>
    <div className="collapse navbar-collapse order-1" id="mobileNavbarSupportedContent">
      <ul className="navbar-nav mr-auto"></ul>
    </div>
  </nav>
  <nav className="sidebar" data-simplebar>
    <div className="sidebar-header"><a href="#home" data-scroll><img className="img-fluid sidebar-avatar" src="https://media-exp1.licdn.com/dms/image/C5603AQFMQ2Wr2BNPOA/profile-displayphoto-shrink_400_400/0/1607857177521?e=1617840000&v=beta&t=TDl53wPZBYrk72QkcqYZ74gbwf0GpD_iljypA3RyaZw" alt="Profile avatar" /></a><span className="sidebar-name">Denis Lutz</span>
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
</div>
</div>
)
}
export default Preloader;