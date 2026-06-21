import "./AnnouncementBar.css";

function AnnouncementBar() {
  const messages = [
    "💪 22g Protein • 50% High Fibre • 50% Low Gluten",
    "🎉 Big Savings Alert! Get 10% OFF on orders above ₹3000 | Use code - TBOF10",
    "🚚 Enjoy Free Shipping on orders above ₹1499 | Shop Now",
    "🌱 So many perks await! Membership LIVE"
  ];

  return (
    <div className="announcement-bar">

      <div className="announcement-track">

        {[...messages, ...messages].map(
          (msg, index) => (
            <span key={index}>
              {msg}
            </span>
          )
        )}

      </div>

    </div>
  );
}

export default AnnouncementBar;