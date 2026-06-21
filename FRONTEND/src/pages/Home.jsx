import { useEffect, useState } from "react";

import { getHomepage } from "../services/api";

import Navbar from "../components/Navbar/Navbar";
import CategoryShortcutBar from "../components/Header/CategoryShortcutBar";
import HeroSlider from "../components/Hero/HeroSlider";
import MembershipBanner from "../components/Membership/MembershipBanner";
import TopHeader from "../components/Header/TopHeader";
import MostLovedSection from "../components/Products/MostLovedSection";
import VideoProductSlider from "../components/Products/VideoProductSlider";
import YoutubeSection from "../components/Youtube/YoutubeSection";
import AnnouncementBar from "../components/Header/AnnouncementBar";
import ProofSection from "../components/Proofs/ProofSection";
import BrandsSlider from "../components/Brands/BrandsSlider";
import TestimonialsSlider from "../components/Testimonials/TestimonialsSlider";
import SpotlightSlider from "../components/Spotlight/SpotlightSlider";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons";

function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getHomepage();
            setData(result);
        };

        fetchData();
    }, []);

    if (!data) return <h1>Loading...</h1>;

    return (
        <>
            <AnnouncementBar
                messages={data?.announcementBar?.messages || []}
            />
            <TopHeader />
            <Navbar
                categories={data.categories}
                concerns={data.concerns}
                farmLife={data.farmLife}
                customers={data.customers}
            />
            <CategoryShortcutBar
                items={data.shortcutCategories}
            />
            <HeroSlider
                hero={data.hero}
            />
            <MostLovedSection
                products={data.products}
            />
            <VideoProductSlider
                videos={data.videos}
                title="It Takes A Village To Make Good Food"
            />
            <YoutubeSection />
            <ProofSection />
            <BrandsSlider />
            <TestimonialsSlider />
            <SpotlightSlider
                spotlight={data.spotlight}
            />
            <Footer />
            <FloatingButtons />
        </>
    );
}

export default Home;