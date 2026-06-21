import { useEffect, useState } from "react";

import { getHomepage } from "../services/api";

import AnnouncementBar from "../components/Header/AnnouncementBar";
import TopHeader from "../components/Header/TopHeader";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons";

function ShippingPolicy() {
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

  if (!data || !data.shippingPolicy) {
    return <h2>Loading...</h2>;
  }

  const policy = data.shippingPolicy;

  return (
    <>
      <AnnouncementBar />

      <TopHeader />

      <Navbar
        categories={data.categories}
        concerns={data.concerns}
        farmLife={data.farmLife}
        customers={data.customers}
      />

      <section className="policy-page">

        <h1 className="policy-title">
          {policy.title}
        </h1>

        <div className="policy-content">

          {policy.intro &&
            policy.intro.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}

          {policy.sections &&
            policy.sections.map((section, index) => (

              <div
                key={index}
                className="policy-section"
              >

                {section.title && (
                  <h3>
                    {section.title}
                  </h3>
                )}

                <ul>

                  {section.points.map(
                    (point, pointIndex) => (

                      <li key={pointIndex}>
                        {point}
                      </li>

                    )
                  )}

                </ul>

              </div>

            ))}

        </div>

      </section>

      <Footer />

      <FloatingButtons />

    </>
  );
}

export default ShippingPolicy;