import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";
import cards from "./data/cards";

/**
 * Root application component.
 * Composes all reusable components and demonstrates props, dynamic rendering,
 * and component composition.
 */
function App() {
  return (
    <>
      {/* ── Header ── */}
      <Header title="React Practice" />

      <main>
        {/* ── Hero Section ── */}
        <section className="hero" id="home">
          <h1 className="hero__title">React Components Practice</h1>
          <p className="hero__subtitle">
            Props &bull; State &bull; Dynamic Rendering
          </p>
          <div className="hero__actions">
            <Button
              text="View Projects"
              variant="primary"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
            <Button
              text="Contact Us"
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </section>

        {/* ── About Section ── */}
        <section className="about" id="about">
          <h2 className="section__title">About This Project</h2>
          <p className="section__subtitle">
            A beginner-friendly React application built to practice reusable
            components, props, state management with <code>useState()</code>,
            dynamic rendering with <code>.map()</code>, form validation, and
            responsive CSS — using only HTML, CSS, and React.
          </p>
        </section>

        {/* ── Cards Section ── */}
        <section className="cards-section" id="services">
          <h2 className="section__title">Our Services</h2>
          <p className="section__subtitle">
            Explore what we offer across development and design.
          </p>

          <div className="cards-grid">
            {cards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                category={card.category}
                image={card.image}
                buttonText={card.buttonText}
              />
            ))}
          </div>
        </section>

        {/* ── Button Variants Demo ── */}
        <section className="demo-section">
          <h2 className="section__title">Button Variants</h2>
          <p className="section__subtitle">
            Reusable button component with three style variants.
          </p>
          <div className="demo-buttons">
            <Button text="Primary" variant="primary" />
            <Button text="Secondary" variant="secondary" />
            <Button text="Danger" variant="danger" />
            <Button text="Disabled" variant="primary" disabled />
          </div>
        </section>

        {/* ── Contact Form ── */}
        <Form formTitle="Contact Us" />
      </main>

      {/* ── Footer ── */}
      <Footer copyright="React Components Practice" />
    </>
  );
}

export default App;
