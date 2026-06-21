import "./VideoProductCard.css";

import {
  FaPlay,
  FaShoppingCart,
} from "react-icons/fa";

function VideoProductCard({ item }) {
  return (
    <div className="video-card">

      <div className="video-wrapper">

        <video
          src={item.video}
          controls
          playsInline
        />

        <div className="play-icon">
          <FaPlay />
        </div>

      </div>

      <div className="video-product-info">

        <img
          src={item.productImage}
          alt=""
        />

        <div>
          <h4>{item.productName}</h4>
          <p>₹ {item.price}</p>
        </div>

      </div>

      <div className="video-buttons">

        <button>
          ADD TO CART
        </button>

        <button className="video-cart-icon">
          <FaShoppingCart />
        </button>

      </div>

    </div>
  );
}

export default VideoProductCard;