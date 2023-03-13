import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faLocationPin, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import '../styles/Restaurant.css';

const menu = [{
    label: "Burger",
    route: "/burger",
}, {
    label: "Pizza",
    route: "/pizza",
}, {
    label: "Meals",
    route: "/meals",
}, {
    label: "Dishes",
    route: "/dishes",
}, {
    label: "Drinks",
    route: "/drinks",
}, {
    label: "Combo",
    route: "/combo",
},
];

function Restaurant() {
    return (
        <>
            <nav className="navbar fixed-top navbar-light bg-white navbar-expand">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'..'} className="nav-link"><FontAwesomeIcon size="lg" icon={faChevronLeft}></FontAwesomeIcon></Link>
                            </li>
                            <span className="navbar-text">
                                Restaurant
                            </span>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container container-m">
                <div className="card-resto shadow-sm">
                    <div className="card-resto__desc">
                        <div className="row">
                            <div className="col">
                                <h4>Mcdonalds</h4>
                            </div>
                            <div className="col">
                                <FontAwesomeIcon size="1x" icon={faLocationPin} className="text-warning"></FontAwesomeIcon>&nbsp;
                                <label>San Pablo City</label>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <FontAwesomeIcon size="1x" icon={faStar} className="text-warning"></FontAwesomeIcon>&nbsp;
                                <label>4.5 (234)</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-menu">
                    <div className="col">
                        <h4>Menu</h4>
                    </div>
                </div>

                <Swiper spaceBetween={10} slidesPerView={3.5} onSlideChange={() => console.log('slide change')}>
                    {
                        menu.map((category, index) => (
                            <SwiperSlide key={index}>
                                <button type="button" className="btn btn-warning shadow-sm w-100">{category.label}</button>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Restaurant;