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
        className="offcanvas offcanvas-bottom"
        tabIndex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-body small">
          <div className="container text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div className="col text  display-6">Support </div>
              <div className="col text  display-6">Oficelink </div>
              <div className="col text  display-6">Newsletter</div>
              <div className="col text  display-6">Social </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
