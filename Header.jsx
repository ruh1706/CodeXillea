import React from "react";
import {Link,useNavigate} from "react-router-dom"
const Header = ({children}) => {
  return (
    <>
      <section id="topbar" class="topbar d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">codexillea@gmail.com</a>
            </i>
            <i class="bi bi-phone d-flex align-items-center ms-4">
              <span>9870652166</span>
            </i>
          </div>
          <div class="social-links d-none d-md-flex align-items-center">
            <a href="#" class="twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com/codexillea?igshid=MzRlODBiNWFlZA==" class="instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      <header id="header" class="header d-flex align-items-center">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center">
     
            <img src="./img/comapnylogo.png" alt="company logo"></img>
            <h1>
              <span className="coll">CodeXillea</span>
            </h1>
          </a>
          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Aboutus">About</Link>
              </li>
              <li>
                <Link to="/Courses">Courses</Link>
              </li>
              <li>
                <Link to="/UpcomingBatches">Upcoming Batches</Link>
              </li>
              <li>
                <Link to="/Contactus">Contact Us</Link>
              </li>
              
            </ul>
          </nav>

          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>

     {children}

   
    </>
  );
};
export default Header;
