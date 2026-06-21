import { useEffect, useState } from "react";

import { getHomepage } from "../services/api";

import AnnouncementBar from "../components/Header/AnnouncementBar";
import TopHeader from "../components/Header/TopHeader";
import Navbar from "../components/Navbar/Navbar";
import AwardsHero from "../components/Awards/AwardsHero";
import YoutubeSlider from "../components/Awards/YoutubeSlider";
import MediaMentions from "../components/Awards/MediaMentions";
import BrandsSlider from "../components/Brands/BrandsSlider";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons";

function Awards() {
    const [data, setData] = useState(null);

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

            <AwardsHero
                hero={data.awardsHero}
            />

            <YoutubeSlider
                videos={data.youtubeVideos}
            />

            <MediaMentions
                articles={data.mediaMentions}
            />


            <BrandsSlider />

            <Footer />

            <FloatingButtons />
        </>
    );
}

export default Awards;