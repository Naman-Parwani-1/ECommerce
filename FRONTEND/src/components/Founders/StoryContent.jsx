import "./StoryContent.css";

function StoryContent({
  content,
}) {
  if (!content) return null;

  return (
    <section className="story-content-box">

      <div className="story-inner">

        <p>
          {content.paragraph1}
        </p>

        <p className="story-highlight">
          {content.highlight1}
        </p>

        <p>
          {content.paragraph2}
        </p>

        <p className="story-highlight center">
          {content.highlight2}
        </p>

        <button className="timeline-btn">
          {content.buttonText}
        </button>

      </div>

    </section>
  );
}

export default StoryContent;