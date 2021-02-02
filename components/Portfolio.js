import React from 'react'
function Portfolio() {
    return (
        <section className="single-section portfolio-area" id="portfolio-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h2 className="section-title">Portfolio</h2>
                            <p className="section-description">Showcasing some of my best work</p>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12">
                        <ul className="list-inline filter-control" role="group" aria-label="Filter Control">
                            <li className="list-inline-item tab-active" data-filter="*">All</li>
                            <li className="list-inline-item" data-filter=".brand">E–Commerce</li>
                            <li className="list-inline-item" data-filter=".design">Javascript</li>
                            <li className="list-inline-item" data-filter=".photos">Java</li>
                            <li className="list-inline-item" data-filter=".photos">Projektmanagement</li>
                            <li className="list-inline-item" data-filter=".photos">Projektmanagement</li>
                        </ul>
                    </div>
                </div>

                <div className="portfolio-grid row">

                    <div className="single-item col-6 col-lg-4 design"><a className="portfolio-item" href="#item-1">
                        <div className="portfolio-wrapper"><img className="img-fluid" alt="Item" src="img/item-1.jpg" />
                            <div className="item-content">
                                <h6 className="content-title">Label Tag Mockup</h6><span className="content-more">More Info</span>
                            </div>
                        </div>
                    </a></div>

                    {/* 

                    <div className="single-item col-6 col-lg-4 photos"><a className="portfolio-item" href="#item-2">
                        <div className="portfolio-wrapper"><img className="img-fluid" alt="Item" src="img/item-2.jpg" />
                            <div className="item-content">
                                <h6 className="content-title">3D Bag Mockup</h6><span className="content-more">More Info</span>
                            </div>
                        </div>
                    </a></div>

                    <div className="single-item col-6 col-lg-4 design"><a className="portfolio-item" href="#item-3">
                        <div className="portfolio-wrapper"><img className="img-fluid" alt="Item" src="img/item-3.jpg" />
                            <div className="item-content">
                                <h6 className="content-title">Modern Bag Design</h6><span className="content-more">More Info</span>
                            </div>
                        </div>
                    </a></div>
                    <div className="single-item col-6 col-lg-4 brand"><a className="portfolio-item" href="#item-4">
                        <div className="portfolio-wrapper mb-lg-0"><img className="img-fluid" alt="Item" src="img/item-4.jpg" />
                            <div className="item-content">
                                <h6 className="content-title">Coffee Cup Design</h6><span className="content-more">More Info</span>
                            </div>
                        </div>
                    </a></div>
                    <div className="single-item col-6 col-lg-4 brand"><a className="portfolio-item" href="#item-5">
                        <div className="portfolio-wrapper mb-0"><img className="img-fluid" alt="Item" src="img/item-5.jpg" />
                            <div className="item-content">
                                <h6 className="content-title">T-Shirt Design</h6><span className="content-more">More Info</span>
                            </div>
                        </div>
                    </a></div>
                    <div className="single-item col-6 col-lg-4 photos"><a className="portfolio-item" href="#item-6">
                        <div className="portfolio-wrapper mb-0"><img className="img-fluid" alt="Item" src="img/item-6.jpg" />
                            <div className="item-content">
                                <h6 className="content-title">Packaging Box Mockup</h6><span className="content-more">More Info</span>
                            </div>
                        </div>
                    </a></div>
                     */}
                </div>
            </div>
            <div className="lightbox-wrapper" id="item-1">
                <div className="f-basis-100">
                    <div className="lightbox-close" data-modal-close><span className="close-btn"><span className="btn-line"></span></span></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="lightbox-gallery owl-carousel owl-theme"><img className="img-fluid item-img" alt="Item" src="img/item-1.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-2.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-3.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-4.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-5.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-6.jpg" /></div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="lightbox-content">
                                <h3 className="content-title">Label Tag Mockup</h3>
                                <div className="content-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut sapiente quo explicabo, quasi incidunt aperiam laudantium, nemo cum eaque inventore ut voluptas voluptatibus nihil! Amet soluta, ea illo sint?</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dignissimos culpa deserunt aspernatur ipsa veritatis alias labore tempore laboriosam commodi! Ab neque sunt, odio voluptatibus, dignissimos nisi consequuntur atque qui explicabo eligendi, harum in? Amet aspernatur atque quam. Illo natus tempora explicabo deleniti molestias numquam debitis repudiandae, repellendus voluptatum soluta?</p>
                                </div>
                                <ul className="list-inline content-info">
                                    <li className="list-inline-item single-info"><span>Client:</span>
                                        <p>Envato</p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Categories:</span>
                                        <p><a href="#0">Branding</a>, <a href="#0">Web Design</a></p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Date:</span>
                                        <p>12 May, 2019</p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Technologies:</span>
                                        <p>HTML5, SCSS, JS</p>
                                    </li>
                                </ul><a className="btn content-btn button-main button-scheme" href="#0" role="button">Visit Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 

            <div className="lightbox-wrapper" id="item-2">
                <div className="f-basis-100">
                    <div className="lightbox-close" data-modal-close><span className="close-btn"><span className="btn-line"></span></span></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="lightbox-gallery owl-carousel owl-theme"><img className="img-fluid item-img" alt="Item" src="img/item-2.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-1.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-3.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-4.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-5.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-6.jpg" /></div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="lightbox-content">
                                <h3 className="content-title">3D Bag Mockup</h3>
                                <div className="content-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut sapiente quo explicabo, quasi incidunt aperiam laudantium, nemo cum eaque inventore ut voluptas voluptatibus nihil! Amet soluta, ea illo sint?</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dignissimos culpa deserunt aspernatur ipsa veritatis alias labore tempore laboriosam commodi! Ab neque sunt, odio voluptatibus, dignissimos nisi consequuntur atque qui explicabo eligendi, harum in? Amet aspernatur atque quam. Illo natus tempora explicabo deleniti molestias numquam debitis repudiandae, repellendus voluptatum soluta?</p>
                                </div>
                                <ul className="list-inline content-info">
                                    <li className="list-inline-item single-info"><span>Client:</span>
                                        <p>Envato</p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Categories:</span>
                                        <p><a href="#0">Branding</a>, <a href="#0">Web Design</a></p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Date:</span>
                                        <p>12 May, 2019</p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Technologies:</span>
                                        <p>HTML5, SCSS, JS</p>
                                    </li>
                                </ul><a className="btn content-btn button-main button-scheme" href="#0" role="button">Visit Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lightbox-wrapper" id="item-3">
                <div className="f-basis-100">
                    <div className="lightbox-close" data-modal-close><span className="close-btn"><span className="btn-line"></span></span></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="lightbox-gallery owl-carousel owl-theme"><img className="img-fluid item-img" alt="Item" src="img/item-3.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-1.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-2.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-4.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-5.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-6.jpg" /></div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="lightbox-content">
                                <h3 className="content-title">Modern Bag Design</h3>
                                <div className="content-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut sapiente quo explicabo, quasi incidunt aperiam laudantium, nemo cum eaque inventore ut voluptas voluptatibus nihil! Amet soluta, ea illo sint?</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dignissimos culpa deserunt aspernatur ipsa veritatis alias labore tempore laboriosam commodi! Ab neque sunt, odio voluptatibus, dignissimos nisi consequuntur atque qui explicabo eligendi, harum in? Amet aspernatur atque quam. Illo natus tempora explicabo deleniti molestias numquam debitis repudiandae, repellendus voluptatum soluta?</p>
                                </div>
                                <ul className="list-inline content-info">
                                    <li className="list-inline-item single-info"><span>Client:</span>
                                        <p>Envato</p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Categories:</span>
                                        <p><a href="#0">Branding</a>, <a href="#0">Web Design</a></p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Date:</span>
                                        <p>12 May, 2019</p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Technologies:</span>
                                        <p>HTML5, SCSS, JS</p>
                                    </li>
                                </ul><a className="btn content-btn button-main button-scheme" href="#0" role="button">Visit Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lightbox-wrapper" id="item-4">
                <div className="f-basis-100">
                    <div className="lightbox-close" data-modal-close><span className="close-btn"><span className="btn-line"></span></span></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="lightbox-gallery owl-carousel owl-theme"><img className="img-fluid item-img" alt="Item" src="img/item-4.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-1.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-2.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-3.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-5.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-6.jpg" /></div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="lightbox-content">
                                <h3 className="content-title">Coffee Cup Design</h3>
                                <div className="content-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut sapiente quo explicabo, quasi incidunt aperiam laudantium, nemo cum eaque inventore ut voluptas voluptatibus nihil! Amet soluta, ea illo sint?</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dignissimos culpa deserunt aspernatur ipsa veritatis alias labore tempore laboriosam commodi! Ab neque sunt, odio voluptatibus, dignissimos nisi consequuntur atque qui explicabo eligendi, harum in? Amet aspernatur atque quam. Illo natus tempora explicabo deleniti molestias numquam debitis repudiandae, repellendus voluptatum soluta?</p>
                                </div>
                                <ul className="list-inline content-info">
                                    <li className="list-inline-item single-info"><span>Client:</span>
                                        <p>Envato</p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Categories:</span>
                                        <p><a href="#0">Branding</a>, <a href="#0">Web Design</a></p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Date:</span>
                                        <p>12 May, 2019</p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Technologies:</span>
                                        <p>HTML5, SCSS, JS</p>
                                    </li>
                                </ul><a className="btn content-btn button-main button-scheme" href="#0" role="button">Visit Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lightbox-wrapper" id="item-5">
                <div className="f-basis-100">
                    <div className="lightbox-close" data-modal-close><span className="close-btn"><span className="btn-line"></span></span></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="lightbox-gallery owl-carousel owl-theme"><img className="img-fluid item-img" alt="Item" src="img/item-5.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-1.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-2.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-3.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-4.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-6.jpg" /></div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="lightbox-content">
                                <h3 className="content-title">T-Shirt Design</h3>
                                <div className="content-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut sapiente quo explicabo, quasi incidunt aperiam laudantium, nemo cum eaque inventore ut voluptas voluptatibus nihil! Amet soluta, ea illo sint?</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dignissimos culpa deserunt aspernatur ipsa veritatis alias labore tempore laboriosam commodi! Ab neque sunt, odio voluptatibus, dignissimos nisi consequuntur atque qui explicabo eligendi, harum in? Amet aspernatur atque quam. Illo natus tempora explicabo deleniti molestias numquam debitis repudiandae, repellendus voluptatum soluta?</p>
                                </div>
                                <ul className="list-inline content-info">
                                    <li className="list-inline-item single-info"><span>Client:</span>
                                        <p>Envato</p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Categories:</span>
                                        <p><a href="#0">Branding</a>, <a href="#0">Web Design</a></p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Date:</span>
                                        <p>12 May, 2019</p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Technologies:</span>
                                        <p>HTML5, SCSS, JS</p>
                                    </li>
                                </ul><a className="btn content-btn button-main button-scheme" href="#0" role="button">Visit Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="lightbox-wrapper" id="item-6">
                <div className="f-basis-100">
                    <div className="lightbox-close" data-modal-close><span className="close-btn"><span className="btn-line"></span></span></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="lightbox-gallery owl-carousel owl-theme"><img className="img-fluid item-img" alt="Item" src="img/item-6.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-1.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-2.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-3.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-4.jpg" /><img className="img-fluid item-img" alt="Item" src="img/item-5.jpg" /></div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="lightbox-content">
                                <h3 className="content-title">Packaging Box Mockup</h3>
                                <div className="content-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut sapiente quo explicabo, quasi incidunt aperiam laudantium, nemo cum eaque inventore ut voluptas voluptatibus nihil! Amet soluta, ea illo sint?</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dignissimos culpa deserunt aspernatur ipsa veritatis alias labore tempore laboriosam commodi! Ab neque sunt, odio voluptatibus, dignissimos nisi consequuntur atque qui explicabo eligendi, harum in? Amet aspernatur atque quam. Illo natus tempora explicabo deleniti molestias numquam debitis repudiandae, repellendus voluptatum soluta?</p>
                                </div>
                                <ul className="list-inline content-info">
                                    <li className="list-inline-item single-info"><span>Client:</span>
                                        <p>Envato</p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Categories:</span>
                                        <p><a href="#0">Branding</a>, <a href="#0">Web Design</a></p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Date:</span>
                                        <p>12 May, 2019</p>
                                    </li>
                                    <li className="list-inline-item single-info"><span>Technologies:</span>
                                        <p>HTML5, SCSS, JS</p>
                                    </li>
                                </ul><a className="btn content-btn button-main button-scheme" href="#0" role="button">Visit Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             */}
        </section>
    )
}
export default Portfolio