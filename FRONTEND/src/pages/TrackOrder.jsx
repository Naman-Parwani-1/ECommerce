import "./TrackOrder.css";

import { useEffect, useState } from "react";

import { getHomepage } from "../services/api";

import TrackOrderForm from "../components/TrackOrder/TrackOrderForm";
import TrackOrderFooter from "../components/TrackOrder/TrackOrderFooter";

function TrackOrder() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getHomepage();

        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="track-order-page">

      <header className="track-header">

        <img
          src={data.trackOrder.logo}
          alt="Two Brothers Organic Farms"
          className="track-logo"
        />

      </header>

      <main className="track-content">

        <TrackOrderForm
          data={data.trackOrder}
        />

      </main>

      <TrackOrderFooter
        data={data.trackOrder}
      />

    </div>
  );
}

export default TrackOrder;