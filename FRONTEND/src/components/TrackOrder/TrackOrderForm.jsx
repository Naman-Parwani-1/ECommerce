import "./TrackOrderForm.css";

import { useState } from "react";

function TrackOrderForm({ data }) {
  const [searchType, setSearchType] =
    useState("tracking");

  const [value, setValue] =
    useState("");

  return (
    <div className="track-card">

      <div className="track-options">

        <span>Search by:</span>

        <label>
          <input
            type="radio"
            checked={
              searchType === "order"
            }
            onChange={() =>
              setSearchType("order")
            }
          />
          Order ID
        </label>

        <label>
          <input
            type="radio"
            checked={
              searchType === "tracking"
            }
            onChange={() =>
              setSearchType("tracking")
            }
          />
          Tracking ID
        </label>

      </div>

      <div className="track-row">

        <input
          type="text"
          value={value}
          placeholder={
            data.placeholder
          }
          onChange={(e) =>
            setValue(e.target.value)
          }
        />

        <button>
          Track Your Order
        </button>

      </div>

      <p>
        Check current status of your shipment.
      </p>

    </div>
  );
}

export default TrackOrderForm;