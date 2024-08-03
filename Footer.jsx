import React from "react";
const Footer = () => {
  return (
    <>
      <footer id="footer" class="footer">
        <div class="container"></div>
        <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
          <a href="index.html" class="logo d-flex align-items-center">
            <span>CodeXillea</span>
          </a>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus.
          </p>
        </div>
        </div>
        <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
          <div class="social-links d-flex mt-4">
            <a href="#" class="twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>{" "}
        </div>
        </div>
        
        <div class="container mt-4">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>CodeXillea</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits"></div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
