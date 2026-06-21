import { useEffect, useState } from "react";

import { getHomepage } from "../services/api";

import AnnouncementBar from "../components/Header/AnnouncementBar";
import TopHeader from "../components/Header/TopHeader";
import Navbar from "../components/Navbar/Navbar";
import CategoryHero from "../components/Category/CategoryHero";
import CollectionControls from "../components/Category/CollectionControls";
import CategoryProductGrid from "../components/Category/CategoryProductGrid";
import FilterDrawer from "../components/Category/FilterDrawer";
import SortDrawer from "../components/Category/SortDrawer";
import VideoProductSlider from "../components/Products/VideoProductSlider";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons";

function Category() {
    const [data, setData] = useState(null);

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const [isSortOpen, setIsSortOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getHomepage();
            setData(result);
        };

        fetchData();
    }, []);

    if (!data) {
        return <h2>Loading...</h2>;
    }

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

            <CategoryHero />

            <CollectionControls
                totalProducts={data.products.length}
                onFilterClick={() =>
                    setIsFilterOpen(true)
                }
                onSortClick={() =>
                    setIsSortOpen(true)
                }
            />

            <FilterDrawer
                isOpen={isFilterOpen}
                onClose={() =>
                    setIsFilterOpen(false)
                }
            />

            <SortDrawer
                isOpen={isSortOpen}
                onClose={() =>
                    setIsSortOpen(false)
                }
            />

            <CategoryProductGrid
                products={data.products}
            />

            <VideoProductSlider
                videos={data.videos}
                title="Watch And Shop"
            />

            <Footer />

            <FloatingButtons />
        </>
    );
}

export default Category;