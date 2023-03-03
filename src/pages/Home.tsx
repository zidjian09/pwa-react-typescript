import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch, faPizzaSlice, faBurger, faWineBottle, faWineGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../styles/Home.css';
import 'swiper/css';

import mcdo from '../assets/mcdo.png';
import shakeys from '../assets/Shakeys.png';
import jollibee from '../assets/Jollibee.png';
import greenwich from '../assets/Greenwich.png';
import burger_king from '../assets/Burger_King.png';


const categories = [{
  icon: faPizzaSlice,
  label: "Pizza"
}, {
  icon: faBurger,
  label: "Burger"
}, {
  icon: faWineBottle,
  label: "Beverages"
}, {
  icon: faWineGlass,
  label: "Alcohol"
}];

const restaurants = [{
  label: "Mcdo",
  icon: mcdo,
  rating: 4.5,
  discount: 15
}, {
  label: "Shakeys",
  icon: shakeys,
  rating: 4.8,
  discount: 20
}, {
  label: "Jollibee",
  icon: jollibee,
  rating: 4.5,
  discount: 15
}, {
  label: "Greenwich",
  icon: greenwich,
  rating: 4.8,
  discount: 20
}, {
  label: "Burger King",
  icon: burger_king,
  rating: 4.5,
  discount: 15
}];

// const imgStyle = {
//   width: "100%",
//   height: "auto"
// };


const Home = () => (
  <div className="container">
    <div className="row mt-5">
      <div className="col-12 mb-1">
        <h3 className="fw-bold">Hi Fherdz!</h3>
        <small>Find your favorite food</small>
      </div>
    </div>
    <div className="row">
      <div className="col-10">
        <div className="input-container">
          <input type="text" className="form-control shadow-sm txt-search" placeholder="Search food or restaurant here..."></input>
          <FontAwesomeIcon size="sm" icon={faSearch} />
        </div>
      </div>
      <div className="col-2">
        <button className="btn btn-light btn-white shadow-sm btn-search">
          <FontAwesomeIcon size="lg" icon={faFilter} />
        </button>
      </div>
    </div>
    <div className="row mt-4 mb-3">
      <div className="col-4 d-flex align-items-end">
        <h5 className="m-0 fw-bold">Categories</h5>
      </div>
      <div className="col-4 offset-4 d-flex justify-content-end align-items-end">
        <small className="fw-bold">Show All</small>
      </div>
    </div>
    <Swiper spaceBetween={10} slidesPerView={3.5} onSlideChange={() => console.log('slide change')}>
      {
        categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="card border-0 shadow-sm card-category">
              <div className="card-img-top d-flex justify-content-center align-items-center pt-2">
                <FontAwesomeIcon size="2x" icon={category.icon}></FontAwesomeIcon>
              </div>
              <div className="card-body py-1 px-1 d-flex justify-content-center">
                <p className="card-text">{category.label}</p>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
    <div className="row mt-4 mb-3">
      <div className="col-4 d-flex align-items-end">
        <h5 className="m-0 fw-bold">Restaurants</h5>
      </div>
      <div className="col-4 offset-4 d-flex justify-content-end align-items-end">
        <small className="fw-bold">Show All</small>
      </div>
    </div>

    {
      restaurants.map((resto, index) => (
        <div className="row mb-3" key={index}>
          <div className="col-12">
            <div className="card border-0 shadow-sm card-restaurant">
              <div className="flex-item-l d-flex justify-content-center align-items-center">
                <img src={resto.icon} alt={resto.label} className="img-fluid img-resto" />
              </div>
              <div className="flex-item-r">
                <div className="card-resto-container">
                  <div className="row">
                    <div className="col-6">
                      <p className="card-resto-name fw-bold">{resto.label}</p>
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-end">
                      <p className="card-resto-discount">{resto.discount}% OFF</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex">
                      <FontAwesomeIcon size="1x" icon={faStar} className="star-rating"></FontAwesomeIcon>
                      <p className="card-resto-rating">{resto.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    }

  </div>
);

export default Home;