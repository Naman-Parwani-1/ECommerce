import { useEffect, useState } from "react";

import { getHomepage } from "../services/api";

import AnnouncementBar from "../components/Header/AnnouncementBar";
import TopHeader from "../components/Header/TopHeader";
import Navbar from "../components/Navbar/Navbar";

import FoundersHeroGrid from "../components/Founders/FoundersHeroGrid";
import OurStory from "../components/Founders/OurStory";
import StoryContent from "../components/Founders/StoryContent";
import WayForward from "../components/Founders/WayForward";
import Visionaries from "../components/Founders/Visionaries";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons";

function FoundersAndTeam() {
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

            <FoundersHeroGrid
                hero={data.foundersHero}
            />

            <OurStory
                story={data.foundersStory}
            />

            <StoryContent
                content={data.storyContent}
            />

            <WayForward
                data={data.wayForward}
            />

            <Visionaries
                data={data.visionaries}
            />

            <Footer />

            <FloatingButtons />
        </>
    );
}

export default FoundersAndTeam;