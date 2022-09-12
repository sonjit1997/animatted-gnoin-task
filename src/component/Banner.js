import React from "react";
import Navbar from "./Navbar";
import { data } from "../Data";
import "./style/Banner.css";

const Banner = () => {
  return (
    <>
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

            <a href="#section" className="btn rounded-pill " id="dropdown">
           Show Cars
            </a>
            <div className="bubbles">
              <img
                src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png"
                alt="bubble"
              />
              <img
                src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png"
                alt="bubble"
              />
              <img
                src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png"
                alt="bubble"
              />
              <img
                src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png"
                alt="bubble"
              />
              <img
                src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png"
                alt="bubble"
              />
              <img
                src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png"
                alt="bubble"
              />
              <img
                src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG26.png"
                alt="bubble"
              />
            </div>
          </div>
        </div>
      </div>
      <section id="section" className="row p-1">
        {data?.map((val, index) => {
          return (
            <div className="col-md-4 mb-3 " key={index}>
              <div className="card text-center ms-4">
                <img
                  src={val.image}
                  className="card-img-top"
                  alt={val.Name}
                  height="250 px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">{val.Name}</h5>
                  <p className="card-text fw-bolder lead">{val.price}</p>
                </div>
              </div>
            </div>
          );
        })}
        ;
      </section>
    </>
  );
};

export default Banner;
