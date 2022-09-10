import React from 'react';
import Navbar from './Navbar';
import './style/Banner.css';

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
    <div className='nav'>
    <Navbar/>
    </div>
      <div className="container ">
      <h1 id='main-text'>
      Drive slower, and live longer.
            </h1>
      </div>
    </div>
  </div>
  );
}

export default Banner;
