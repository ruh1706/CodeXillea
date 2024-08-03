import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Courses = ()=>{
    return (
        <>
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
        </>
        )
    }
    export default Courses