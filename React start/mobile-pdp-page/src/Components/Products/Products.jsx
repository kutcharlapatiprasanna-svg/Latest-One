import React from 'react';
import "./Products.css"
import keyboard from "../../assets/keyboard_arrow_down.png"

const Products = () => {
  return (
    <div className='products'>
      <div className='products-heading'>
        <h1 className='head'>$262.23</h1>
        <h2 className='head2'>In Stock</h2>
      </div>


      <div className=''>
        <div className='mainthing'>
          <p className="deliver-text">Deliver to<a href="#" className="deliver-link">Chris Huntington 11743</a>
          </p>

        </div>
        <div>
          <p className="deliver-text">
            Est Delivery Date:  <a href="#" className="deliver-link"> 11/10/24</a>
          </p>
        </div>

        <div className='deliver-text'>
          <button className='btn20'>Quantity: 1</button>
          <button className="btn20">1/CS<img src={keyboard} alt="Keyboard" />
          </button>

        </div>


        <button className='last'>Add to Cart</button>



      </div>
    </div>
  );
}

export default Products;
