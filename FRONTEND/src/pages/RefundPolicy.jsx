import "./RefundPolicy.css";

import { useEffect, useState } from "react";

import { getHomepage } from "../services/api";

import AnnouncementBar from "../components/Header/AnnouncementBar";
import TopHeader from "../components/Header/TopHeader";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons";

function RefundPolicy() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getHomepage();

      setData(result);
    };

    fetchData();
  }, []);

  if (!data) return null;

  const policy = data.refundPolicy;

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

        <h1>
          {policy.title}
        </h1>

        {policy.intro.map((text, index) => (
          <p key={index}>
            {text}
          </p>
        ))}

        {policy.sections.map((section, index) => (

          <div
            key={index}
            className="policy-section"
          >

            <h3>
              {section.title}
            </h3>

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

      </section>

      <Footer />

      <FloatingButtons />
    </>
  );
}

export default RefundPolicy;