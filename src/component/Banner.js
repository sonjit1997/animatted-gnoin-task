import React from "react";
import Navbar from "./Navbar";
import "./style/Banner.css";

const Banner = () => {
  return (
    <div>
      <img
        className="card-img"
        src="https://th.bing.com/th/id/R.49d496692a2f11a7d12be15e22adf0de?rik=u4q5OqqkOt9n0g&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fCool-car-wallpaper-hd-free.jpg&ehk=pSqsDHpopXCdwFvw10Ilc13Sy7mOVOPf1BhN%2bWKqRTA%3d&risl=&pid=ImgRaw&r=0"
        alt="Home page background"
        height={"745 px"}
      />
      <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div className="nav">
          <Navbar />
        </div>
        <div className="container ">
          <h1 id="main-text">Drive slower, and live longer.</h1>

          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              id="Drop-button"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Show Car
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  <div class="container text-center">
                    <div class="grid1">
                      <div class="card">
                        <img
                          className="grid-image"
                          src="https://th.bing.com/th/id/R.99a5ad466964557b4654e77569eb871c?rik=l%2fUZ%2b2yxyO1bYA&riu=http%3a%2f%2ftenmania.com%2fwp-content%2fuploads%2f2014%2f05%2ftop-20-best-luxury-car-brands-bugatti-1024x640.jpg&ehk=eUlzHv1FuQbz9prqcBKRN9Jrvcc6gUL0IhacUDVIMDY%3d&risl=&pid=ImgRaw&r=0"
                          alt="cars"
                        />
                      </div>
                      <div class="card">
                        <img
                          className="grid-image"
                          src="https://cdn.carbuzz.com/gallery-images/1600/759000/500/759587.jpg"
                          alt="cars"
                        />
                      </div>
                      <div class="card">
                        <img
                          className="grid-image"
                          src="https://wallup.net/wp-content/uploads/2019/09/800546-1961-corvette-chevy-chevrolet-convertible-custom-c1-cars-1.jpg"
                          alt="cars"
                        />
                      </div>
                      <div class="card">
                        <img
                          className="grid-image"
                          src="https://photos.classiccars.com/cc-temp/listing/100/8773/9087251-1957-chevrolet-corvette-std.jpg"
                          alt="cars"
                        />
                      </div>
                      <div class="card">
                        <img
                          className="grid-image"
                          src="https://th.bing.com/th/id/R.09c156f8f5c4497ffad41619b06e1a4b?rik=zLnI813EHPPa%2fQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f_lHnVqQxS-Fs%2fTKuDRG_NQ7I%2fAAAAAAAAAFg%2f6pqLwXIwFcg%2fs640%2fBugatti-Veyron-for-Dubai-08.jpg&ehk=Kpao%2bGKDECH%2b5JAxNrLOe8ValedcOyUHgO7GnF8FnZ0%3d&risl=&pid=ImgRaw&r=0"
                          alt="cars"
                        />
                      </div>
                      <div class="card">
                        <img
                          className="grid-image"
                          src="https://th.bing.com/th/id/R.e736070e900a7cc47a0910fa63c6788e?rik=y%2bAvKVQzDEjpNA&riu=http%3a%2f%2fwww.hdwallpapers.in%2fdownload%2f2013_bugatti_veyron_grand_sport_vitesse-2560x1440.jpg&ehk=INrC3GeSBWkXe8msFXWoSwo%2bm73wzTNPjutpIqyHpew%3d&risl=&pid=ImgRaw&r=0"
                          alt="cars"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="bubbles">
          <img src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png" alt="bubble"/>
          <img src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png" alt="bubble"/>
          <img src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png" alt="bubble"/>
          <img src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png" alt="bubble"/>
          <img src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png" alt="bubble"/>
          <img src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png" alt="bubble"/>
          <img src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png" alt="bubble"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
