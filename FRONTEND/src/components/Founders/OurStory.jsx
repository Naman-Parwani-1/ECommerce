import "./OurStory.css";

function OurStory({ story }) {
  if (!story) return null;

  return (
    <section className="our-story">

      <h2 className="story-title">
        {story.title}
      </h2>

      <div className="story-wrapper">

        <div className="story-image">
          <img
            src={story.image}
            alt={story.title}
          />
        </div>

        <div className="story-content">

          <p className="story-intro">
            {story.intro}
          </p>

          <p className="story-question">
            {story.question}
          </p>

          <p className="story-answer">
            {story.answer}
          </p>

        </div>

      </div>

    </section>
  );
}

export default OurStory;