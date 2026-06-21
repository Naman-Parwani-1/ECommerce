import { useEffect, useState } from "react";

import { getHomepage } from "../services/api";

import AnnouncementBar from "../components/Header/AnnouncementBar";
import TopHeader from "../components/Header/TopHeader";
import Navbar from "../components/Navbar/Navbar";

import ContactHero from "../components/ContactUs/ContactHero";
import ContactSupportCard from "../components/ContactUs/ContactSupportCard";
import ContactInfoGrid from "../components/ContactUs/ContactInfoGrid";
import ContactForm from "../components/ContactUs/ContactForm";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons";

function ContactUs() {
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

            <ContactHero />

            <ContactSupportCard
                data={data.contact}
            />

            <ContactInfoGrid
                cards={data.contact.infoCards}
            />

            <ContactForm
                data={data.contact.contactForm}
            />

            <Footer />

            <FloatingButtons />
        </>
    );
}

export default ContactUs;