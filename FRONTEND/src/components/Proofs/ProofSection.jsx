import "./ProofSection.css";

function ProofSection() {
  const proofs = [
    {
      image: "/proofs/proof-1.JPG",
      text: "Independently tested and certified to be completely free from glyphosate, a harmful weedicide linked to serious health risks and banned in 20+ countries."
    },
    {
      image: "/proofs/proof-2.JPG",
      text: "Our facility follows internationally recognized standards for cleanliness, safety, and quality at every step of the manufacturing process."
    },
    {
      image: "/proofs/proof-3.JPG",
      text: "A globally respected food safety certification that guarantees our processes, ingredients, and packaging meet the highest international standards."
    }
  ];

  return (
    <section className="proof-section">
      <h2>Good Food Backed by Proof</h2>

      <div className="proof-grid">
        {proofs.map((proof, index) => (
          <div className="proof-card" key={index}>
            <img
              src={proof.image}
              alt="Certification"
            />

            <p>{proof.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProofSection;