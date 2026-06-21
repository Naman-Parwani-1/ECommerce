import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import ShopByConcern from "./pages/ShopByConcern";
import FoundersAndTeam from "./pages/FoundersAndTeam";
import Awards from "./pages/Awards";
import TeamOnGround from "./pages/TeamOnGround";
import TrackOrder from "./pages/TrackOrder";
import ContactUs from "./pages/ContactUs";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/collections/all"
          element={<Category />}
        />

        <Route
          path="/pages/shop-by-concern"
          element={<ShopByConcern />}
        />

        <Route
          path="/pages/founders-and-team"
          element={<FoundersAndTeam />}
        />

        <Route
          path="/pages/awards"
          element={<Awards />}
        />

        <Route
          path="/pages/team-on-ground"
          element={<TeamOnGround />}
        />

        <Route
          path="/pages/track-order"
          element={<TrackOrder />}
        />

        <Route
          path="/pages/contact-us"
          element={<ContactUs />}
        />

        <Route
          path="/pages/refund-policy"
          element={<RefundPolicy />}
        />

        <Route
          path="/pages/shipping-policy"
          element={<ShippingPolicy />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;