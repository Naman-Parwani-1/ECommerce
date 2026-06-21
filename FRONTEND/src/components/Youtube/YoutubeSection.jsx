import "./YoutubeSection.css";

function YoutubeSection() {
    return (
        <section className="youtube-section">

            <h2>
                We Are Farmers, Growing Honest Food With Love & Care
            </h2>

            <div className="youtube-wrapper">

                <iframe width="560" height="315" src="https://www.youtube.com/embed/VTLCoHnyACE?si=iVG1P2ANkZhYf97U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>

        </section>
    );
}

export default YoutubeSection;