import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  addItem,
  removeItem
} from "../slices/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// images
import burger_preview from '../assets/burger-preview.png';

// css
import '../styles/Cart.css';


function Cart() {
  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(addItem({
      id: "1",
      name: "Overload Burger",
      description: "Spicy & crispy with garlic",
      price: "150",
      currency: "PHP",
      amount: "1"
    }))
  }

  const removeFromCart = () => {
    dispatch(removeItem(
      { id: "1" }
    ))
  }

  return (
    <>
      <nav className="navbar fixed-top navbar-light navbar-expand">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'..'} className="nav-link"><FontAwesomeIcon size="lg" icon={faChevronLeft}></FontAwesomeIcon></Link>
              </li>
              <span className="navbar-text">
                Cart
              </span>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <button className="btn btn-warning cart-item__btn-plus fw-bold" aria-label="Add item" onClick={addToCart}>Add Item</button>
        <button className="btn btn-warning cart-item__btn-plus fw-bold" aria-label="Remove item" onClick={removeFromCart}>Remove Item</button>
        {/* <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button> */}
      </div>

      <div className="container mt-3">
        {/* Rendering of Cart */}
        {
          cart.map((item, index) => (
            <div className="card border-0 shadow-sm card-cart-item mb-3" key={index}>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <label className="cart-item__name">{item.name}</label><br />
                        <small className="cart-item__desc">{item.description}</small>
                      </div>
                      <div className="col-4">
                        <label className="text-warning cart-item__price">{item.price} {item.currency}</label>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-8">
                        <button type="button" className="btn btn-light shadow-sm mr-2 cart-item__btn-minus">
                          <FontAwesomeIcon size="lg" icon={faMinus}></FontAwesomeIcon>
                        </button>
                        <span className="cart-item__amount">1</span>
                        <button type="button" className="btn btn-warning shadow-sm ml-2 cart-item__btn-plus">
                          <FontAwesomeIcon size="lg" icon={faPlus}></FontAwesomeIcon>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <img className="img-fluid" src={burger_preview} alt="Burger Preview"></img>
                  </div>
                </div>
              </div>
            </div>
          ))
        }

        {/* Total Items to Checkout */}
        <div className="card border-0 shadow-sm mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <label>Total Items</label>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <label>150 PHP</label>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>Delivery Fee</label>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <label>10 PHP</label>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">
                <h4>Total Cost</h4>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <h4 className="cart__total">160 PHP</h4>
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-warning w-100 fw-bold cart__checkout">CHECKOUT</button>
      </div>
    </>
  )
}

export default Cart;