import { useEffect, useState } from "react";

import { getHomepage } from "../services/api";

import AnnouncementBar from "../components/Header/AnnouncementBar";
import TopHeader from "../components/Header/TopHeader";
import Navbar from "../components/Navbar/Navbar";
import TeamHero from "../components/TeamOnGround/TeamHero";
import TeamIntro from "../components/TeamOnGround/TeamIntro";
import TeamMembers from "../components/TeamOnGround/TeamMembers";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons";

function TeamOnGround() {
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
        <>
            <AnnouncementBar />

            <TopHeader />

            <Navbar
                categories={data.categories}
                concerns={data.concerns}
                farmLife={data.farmLife}
                customers={data.customers}
            />

            <TeamHero
                hero={data.teamHero}
            />

            <TeamIntro
                intro={data.teamIntro}
            />

            <TeamMembers
                members={data.teamMembers}
            />

            <Footer />

            <FloatingButtons />
        </>
    );
}

export default TeamOnGround;