import right from "../../assets/chevron_right.png";
import backward from "../../assets/chevron_backward.png";
import heells from "../../assets/heelstarp.jpg";
import "./Accessories.css";

const Accessories = () => {
  return (
    <div className="accessories">

      {/* HEADER */}
      <div className="accessories-header">
        <p>Accessories</p>
        <img src={right} alt="open" />
      </div>

      {/* PRODUCTS */}
      <div className="products-row">

        <img src={backward} className="arrow" alt="left" />

        <div className="products">

          {/* CARD 1 */}
          <div className="product-card">
            <div className="img-box">
              <img src={heells} alt="Heel Strap" />
            </div>

            <div className="info">
              <h4>Heel Strap</h4>
              <p className="item">Item # STDS831</p>
              <p className="price">$262.23</p>
              <button className="qty">Quantity: 1</button>
              <button className="cart">Add to Cart</button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="product-card">
            <div className="img-box">
              <img src={heells} alt="Heel Strap" />
            </div>

            <div className="info">
              <h4>Heel Strap</h4>
              <p className="item">Item # STDS831</p>
              <p className="price">$262.23</p>
              <button className="qty">Quantity: 1</button>
              <button className="cart">Add to Cart</button>
            </div>
          </div>

        </div>

        <img src={right} className="arrow" alt="right" />

      </div>
    </div>
  );
};

export default Accessories;
