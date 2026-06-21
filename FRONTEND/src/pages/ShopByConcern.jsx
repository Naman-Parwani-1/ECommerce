import "./ShopByConcern.css";

import { useEffect, useState } from "react";

import { getHomepage } from "../services/api";

import AnnouncementBar from "../components/Header/AnnouncementBar";
import TopHeader from "../components/Header/TopHeader";
import Navbar from "../components/Navbar/Navbar";
import ConcernCategories from "../components/ShopByConcern/ConcernCategories";
import ConcernSelector from "../components/ShopByConcern/ConcernSelector";
import CategoryProductGrid from "../components/Category/CategoryProductGrid";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons";

function ShopByConcern() {
    const [data, setData] = useState(null);

    const [activeConcern, setActiveConcern] = useState("Weight Loss");

    useEffect(() => {
        const fetchData = async () => {
            const result = await getHomepage();
            setData(result);
        };

        fetchData();
    }, []);

    if (!data) return <h2>Loading...</h2>;
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

            <ConcernSelector
                concerns={data.concerns}
                activeConcern={activeConcern}
                setActiveConcern={setActiveConcern}
            />

            <h2 className="concern-heading">
                {activeConcern.toUpperCase()}
            </h2>

            <CategoryProductGrid
                products={data.products}
            />

            <Footer />


            <FloatingButtons />
        </>
    );
}

export default ShopByConcern;