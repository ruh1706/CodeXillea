import React from "react";
import {Link,useNavigate} from "react-router-dom"
const Main =()=>{
  const navigate = useNavigate()
  // const btnregister =()=>{
  //   navigate("https://forms.gle/8Npe9psXnGm4EZ3q9")

  // }
    return(
<>
<section id="hero" class="hero">
<div class="container position-relative">
  <div class="row gy-5" data-aos="fade-in">
    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
      <h2>
        Welcome to <span>CodeXillea</span>
      </h2>
      <p>
       We can provide you skills. Skills provide you job.<br/>Dedicated to Internship / Placements.
      </p>
      <div class="d-flex justify-content-center justify-content-lg-start">
        <a href="#about" class="btn-get-started">
          Get Started
        </a>
        <a
        //   href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          class="glightbox btn-watch-video d-flex align-items-center"
        >
          <i class="bi bi-play-circle"></i>
          <span>Watch Video</span>
        </a>
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2">
      <img
        src="./img/demo.png"
        class="img-fluid"
        alt=""
        data-aos="zoom-out"
        data-aos-delay="100"
      ></img>
    </div>
  </div>
</div>

<div class="icon-boxes position-relative">
  <div class="container position-relative">
    <div class="row gy-4 mt-5">
      <div
        class="col-xl-3 col-md-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="icon-box">
          <div class="icon">
            <i class="bi bi-easel"></i>
          </div>
          <h4 class="title">
          <Link  class="stretched-link"> CSAT <br/><br/> <h5>Coding Scholarship Appitude Test.</h5><br/></Link> <a href="#" onClick={"https://forms.gle/8Npe9psXnGm4EZ3q9"} className="btn btn-success">Get Register</a>
        
          </h4>
        </div>
      </div>

      

      <div
        class="col-xl-3 col-md-6"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div class="icon-box">
          <div class="icon">
            <i class="bi bi-book"></i>
          </div>
          <h4 class="title">
            <a href="" class="stretched-link">
                Upcoming Batches<br/><br/> <ul>
                <li className="listdesign"><a className="listdesign">Web Development</a></li>
                <li className="listdesign"><a className="listdesign">Java</a></li></ul>
                <h5>Start on 2nd July</h5>
            </a>
          </h4>
        </div>
      </div>

      
    </div>
  </div>
</div>
</section>
<section id="portfolio" class="portfolio sections-bg">
<div class="container" data-aos="fade-up">
  <div class="section-header">
    <h2>Courses</h2>
    
  </div>

  <div
    class="portfolio-isotope"
    data-portfolio-filter="*"
    data-portfolio-layout="masonry"
    data-portfolio-sort="original-order"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div>
      <ul class="portfolio-flters">
        <li data-filter="*" class="filter-active">
          All
        </li>
        
      </ul>
    </div>

    <div class="row gy-4 portfolio-container">
        <div class="col-xl-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <a
              href="./img/webimage.png"
              data-gallery="portfolio-gallery-app"
              class="glightbox"
            >
              <img
                src="./img/webimage.png"
                class="img-fluid"
                alt=""
              ></img>
            </a>
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html" title="More Details">
                  Web Design
                </a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <br/>
            <center> <button className="btn btn-primary">Details</button></center> 
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 portfolio-item filter-product">
          <div class="portfolio-wrap">
            <a
              href="./img/javaimage.jpg"
              data-gallery="portfolio-gallery-app"
              class="glightbox"
            >
              <img
                src="./img/javaimage.jpg"
                class="img-fluid"
                alt=""
              ></img>
            </a>
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html" title="More Details">
                  Core Java
                </a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p><br/>
              <center> <button className="btn btn-primary">Details</button></center>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
          <div class="portfolio-wrap">
            <a
              href="./img/advanceimg.jpg"
              data-gallery="portfolio-gallery-app"
              class="glightbox"
            >
              <img
                src="./img/advanceimg.jpg"
                class="img-fluid"
                alt=""
              ></img>
            </a>
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html" title="More Details">
                  Advance Java
                </a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p><br/><br/>
              <center> <button className="btn btn-primary">Details</button></center>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 portfolio-item filter-books">
          <div class="portfolio-wrap">
            <a
              href="./img/pythonimage.jpg"
              data-gallery="portfolio-gallery-app"
              class="glightbox"
            >
              <img
                src="./img/pythonimage.jpg"
                class="img-fluid"
                alt=""
              ></img>
            </a>
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html" title="More Details">
                  Python
                </a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p><br/>
              <center> <button className="btn btn-primary">Details</button></center>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <a
              href="./img/clanguageimg.png"
              data-gallery="portfolio-gallery-app"
              class="glightbox"
            >
              <img
                src="./img/clanguageimg.png"
                class="img-fluid"
                alt=""
              ></img>
            </a>
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html" title="More Details">
                  C Language
                </a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p><br/>
              <center> <button className="btn btn-primary">Details</button></center>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 portfolio-item filter-product">
          <div class="portfolio-wrap">
            <a
              href="./img/c++image.jpg"
              data-gallery="portfolio-gallery-app"
              class="glightbox"
            >
              <img
                src="./img/c++image.jpg"
                class="img-fluid"
                alt=""
              ></img>
            </a>
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html" title="More Details">
                  C++ Language
                </a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p><br/>
              <center> <button className="btn btn-primary">Details</button></center>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
          <div class="portfolio-wrap">
            <a
              href="assets/img/portfolio/branding-2.jpg"
              data-gallery="portfolio-gallery-app"
              class="glightbox"
            >
              <img
                src="assets/img/portfolio/branding-2.jpg"
                class="img-fluid"
                alt=""
              ></img>
            </a>
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html" title="More Details">
                  Branding 2
                </a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 portfolio-item filter-books">
          <div class="portfolio-wrap">
            <a
              href="assets/img/portfolio/books-2.jpg"
              data-gallery="portfolio-gallery-app"
              class="glightbox"
            >
              <img
                src="assets/img/portfolio/books-2.jpg"
                class="img-fluid"
                alt=""
              ></img>
            </a>
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html" title="More Details">
                  Books 2
                </a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <a
              href="assets/img/portfolio/app-3.jpg"
              data-gallery="portfolio-gallery-app"
              class="glightbox"
            >
              <img
                src="assets/img/portfolio/app-3.jpg"
                class="img-fluid"
                alt=""
              ></img>
            </a>
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html" title="More Details">
                  App 3
                </a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 portfolio-item filter-product">
          <div class="portfolio-wrap">
            <a
              href="assets/img/portfolio/product-3.jpg"
              data-gallery="portfolio-gallery-app"
              class="glightbox"
            >
              <img
                src="assets/img/portfolio/product-3.jpg"
                class="img-fluid"
                alt=""
              ></img>
            </a>
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html" title="More Details">
                  Product 3
                </a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
          <div class="portfolio-wrap">
            <a
              href="assets/img/portfolio/branding-3.jpg"
              data-gallery="portfolio-gallery-app"
              class="glightbox"
            >
              <img
                src="assets/img/portfolio/branding-3.jpg"
                class="img-fluid"
                alt=""
              ></img>
            </a>
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html" title="More Details">
                  Branding 3
                </a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 portfolio-item filter-books">
          <div class="portfolio-wrap">
            <a
              href="assets/img/portfolio/books-3.jpg"
              data-gallery="portfolio-gallery-app"
              class="glightbox"
            >
              <img
                src="assets/img/portfolio/books-3.jpg"
                class="img-fluid"
                alt=""
              ></img>
            </a>
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html" title="More Details">
                  Books 3
                </a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
</section>

<main id="main">







<section id="testimonials" class="testimonials">
  <div class="container" data-aos="fade-up">
    <div class="section-header">
      <h2>Why CodeXillea ?</h2>
      <p>
      Key Features of CodeXillea
      </p>
    </div>

    <div
      class="slides-3 swiper"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <div class="d-flex align-items-center">
                <img
                  src="assets/img/testimonials/testimonials-1.jpg"
                  class="testimonial-img flex-shrink-0"
                  alt=""
                ></img>
                <div>
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam,
                ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                risus at semper.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <div class="d-flex align-items-center">
                <img
                  src="assets/img/testimonials/testimonials-2.jpg"
                  class="testimonial-img flex-shrink-0"
                  alt=""
                ></img>
                <div>
                  <h3>HARSHVARDHAN SONI</h3>
                  <h4>Designer</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Export tempor illum tamen malis malis eram quae irure
                esse labore quem cillum quid cillum eram malis quorum
                velit fore eram velit sunt aliqua noster fugiat irure
                amet legam anim culpa.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <div class="d-flex align-items-center">
                <img
                  src="assets/img/testimonials/testimonials-3.jpg"
                  class="testimonial-img flex-shrink-0"
                  alt=""
                ></img>
                <div>
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Enim nisi quem export duis labore cillum quae magna enim
                sint quorum nulla quem veniam duis minim tempor labore
                quem eram duis noster aute amet eram fore quis sint
                minim.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <div class="d-flex align-items-center">
                <img
                  src="assets/img/testimonials/testimonials-4.jpg"
                  class="testimonial-img flex-shrink-0"
                  alt=""
                ></img>
                <div>
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Fugiat enim eram quae cillum dolore dolor amet nulla
                culpa multos export minim fugiat minim velit minim dolor
                enim duis veniam ipsum anim magna sunt elit fore quem
                dolore.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <div class="d-flex align-items-center">
                <img
                  src="assets/img/testimonials/testimonials-5.jpg"
                  class="testimonial-img flex-shrink-0"
                  alt=""
                ></img>
                <div>
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Quis quorum aliqua sint quem legam fore sunt eram irure
                aliqua veniam tempor noster veniam enim culpa labore
                duis sunt culpa nulla illum cillum fugiat legam esse
                veniam culpa fore.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    
  </div>
</section>







<section id="faq" class="faq">
  <div class="container" data-aos="fade-up">
    <div class="row gy-4">
      <div class="col-lg-4">
        <div class="content px-xl-5">
          <h3>
            Frequently Asked <strong>Questions</strong>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Duis aute irure dolor in reprehenderit
          </p>
        </div>
      </div>

      <div class="col-lg-8">
        <div
          class="accordion accordion-flush"
          id="faqlist"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-content-1"
              >
                <span class="num">1.</span>
                Non consectetur a erat nam at lectus urna duis?
              </button>
            </h3>
            <div
              id="faq-content-1"
              class="accordion-collapse collapse"
              data-bs-parent="#faqlist"
            >
              <div class="accordion-body">
                Feugiat pretium nibh ipsum consequat. Tempus iaculis
                urna id volutpat lacus laoreet non curabitur gravida.
                Venenatis lectus magna fringilla urna porttitor rhoncus
                dolor purus non.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-content-2"
              >
                <span class="num">2.</span>
                Feugiat scelerisque varius morbi enim nunc faucibus a
                pellentesque?
              </button>
            </h3>
            <div
              id="faq-content-2"
              class="accordion-collapse collapse"
              data-bs-parent="#faqlist"
            >
              <div class="accordion-body">
                Dolor sit amet consectetur adipiscing elit pellentesque
                habitant morbi. Id interdum velit laoreet id donec
                ultrices. Fringilla phasellus faucibus scelerisque
                eleifend donec pretium. Est pellentesque elit
                ullamcorper dignissim. Mauris ultrices eros in cursus
                turpis massa tincidunt dui.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-content-3"
              >
                <span class="num">3.</span>
                Dolor sit amet consectetur adipiscing elit pellentesque
                habitant morbi?
              </button>
            </h3>
            <div
              id="faq-content-3"
              class="accordion-collapse collapse"
              data-bs-parent="#faqlist"
            >
              <div class="accordion-body">
                Eleifend mi in nulla posuere sollicitudin aliquam
                ultrices sagittis orci. Faucibus pulvinar elementum
                integer enim. Sem nulla pharetra diam sit amet nisl
                suscipit. Rutrum tellus pellentesque eu tincidunt.
                Lectus urna duis convallis convallis tellus. Urna
                molestie at elementum eu facilisis sed odio morbi quis
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-content-4"
              >
                <span class="num">4.</span>
                Ac odio tempor orci dapibus. Aliquam eleifend mi in
                nulla?
              </button>
            </h3>
            <div
              id="faq-content-4"
              class="accordion-collapse collapse"
              data-bs-parent="#faqlist"
            >
              <div class="accordion-body">
                Dolor sit amet consectetur adipiscing elit pellentesque
                habitant morbi. Id interdum velit laoreet id donec
                ultrices. Fringilla phasellus faucibus scelerisque
                eleifend donec pretium. Est pellentesque elit
                ullamcorper dignissim. Mauris ultrices eros in cursus
                turpis massa tincidunt dui.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-content-5"
              >
                <span class="num">5.</span>
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat?
              </button>
            </h3>
            <div
              id="faq-content-5"
              class="accordion-collapse collapse"
              data-bs-parent="#faqlist"
            >
              <div class="accordion-body">
                Molestie a iaculis at erat pellentesque adipiscing
                commodo. Dignissim suspendisse in est ante in. Nunc vel
                risus commodo viverra maecenas accumsan. Sit amet nisl
                suscipit adipiscing bibendum est. Purus gravida quis
                blandit turpis cursus in
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="recent-posts" class="recent-posts sections-bg">
  <div class="container" data-aos="fade-up">
    <div class="section-header">
      <h2>Recent Blog Posts</h2>
      <p>
        Consequatur libero assumenda est voluptatem est quidem illum et
        officia imilique qui vel architecto accusamus fugit aut qui
        distinctio
      </p>
    </div>

    <div class="row gy-4">
      <div class="col-xl-4 col-md-6">
        <article>
          <div class="post-img">
            <img
              src="assets/img/blog/blog-1.jpg"
              alt=""
              class="img-fluid"
            ></img>
          </div>

          <p class="post-category">Politics</p>

          <h2 class="title">
            <a href="blog-details.html">
              Dolorum optio tempore voluptas dignissimos
            </a>
          </h2>

          <div class="d-flex align-items-center">
            <img
              src="assets/img/blog/blog-author.jpg"
              alt=""
              class="img-fluid post-author-img flex-shrink-0"
            ></img>
            <div class="post-meta">
              <p class="post-author">Maria Doe</p>
              <p class="post-date">
                <time datetime="2022-01-01">Jan 1, 2022</time>
              </p>
            </div>
          </div>
        </article>
      </div>

      <div class="col-xl-4 col-md-6">
        <article>
          <div class="post-img">
            <img
              src="assets/img/blog/blog-2.jpg"
              alt=""
              class="img-fluid"
            ></img>
          </div>

          <p class="post-category">Sports</p>

          <h2 class="title">
            <a href="blog-details.html">
              Nisi magni odit consequatur autem nulla dolorem
            </a>
          </h2>

          <div class="d-flex align-items-center">
            <img
              src="assets/img/blog/blog-author-2.jpg"
              alt=""
              class="img-fluid post-author-img flex-shrink-0"
            ></img>
            <div class="post-meta">
              <p class="post-author">Allisa Mayer</p>
              <p class="post-date">
                <time datetime="2022-01-01">Jun 5, 2022</time>
              </p>
            </div>
          </div>
        </article>
      </div>

      <div class="col-xl-4 col-md-6">
        <article>
          <div class="post-img">
            <img
              src="assets/img/blog/blog-3.jpg"
              alt=""
              class="img-fluid"
            ></img>
          </div>

          <p class="post-category">Entertainment</p>

          <h2 class="title">
            <a href="blog-details.html">
              Possimus soluta ut id suscipit ea ut in quo quia et soluta
            </a>
          </h2>

          <div class="d-flex align-items-center">
            <img
              src="assets/img/blog/blog-author-3.jpg"
              alt=""
              class="img-fluid post-author-img flex-shrink-0"
            ></img>
            <div class="post-meta">
              <p class="post-author">Mark Dower</p>
              <p class="post-date">
                <time datetime="2022-01-01">Jun 22, 2022</time>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>


</main>
</>
    )
}
export default Main