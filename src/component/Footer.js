import React from 'react';
import './style/Footer.css';

const Footer = () => {
  return (
    <>
       <div>
      <button
        className=""
        id="footer"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
      >
        © 2022 A11, Inc.·Privacy·Terms·Sitemap·Company details·Destinations
        English (IN) Support & resources{" "}
      </button>

      <div
        class="offcanvas offcanvas-bottom"
        tabIndex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div class="offcanvas-body small">
          <div class="container text-center">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div class="col text  display-6">Support </div>
              <div class="col text  display-6">Oficelink </div>
              <div class="col text  display-6">Newsletter</div>
              <div class="col text  display-6">Social </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
