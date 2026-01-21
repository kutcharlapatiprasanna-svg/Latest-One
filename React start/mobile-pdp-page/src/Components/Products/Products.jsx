import React from "react";
import "./Products.css";
import keyboard from "../../assets/keyboard_arrow_down.png"; // replace with your asset path

function Products() {
  return (
    <div className="mobile-card-wrapper">
      <div className="mobile-card">

        {/* TOP ROW: Price + Stock */}
        <div className="top-row">
          <span className="price">$262.23</span>
          <span className="stock">In Stock</span>
        </div>

        {/* DELIVERY INFO */}
        <p className="text">
          Deliver to <span>Chris - Huntington 11743</span>
        </p>

        <p className="text">
          Est Delivery Date: <span>11/10/24</span>
        </p>

        {/* ACTION ROW: Quantity & Package */}
        <div className="action-row">
          <button className="outline-btn">Quantity: 1</button>
          <button className="outline-btn">
            1/CS <img src={keyboard} alt="Dropdown" />
          </button>
        </div>

        {/* ADD TO CART */}
        <button className="add-btn">Add to Cart</button>

      </div>
    </div>
  );
}

// ✅ Export at the very end
export default Products;
