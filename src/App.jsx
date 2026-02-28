function App() {
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <h1>CodeMyProject</h1>
        <p>
          Affordable College Website, Mini & Arduino Projects with Full Explanation
        </p>
        <a href="#contact" className="btn">
          Contact on WhatsApp
        </a>
      </header>

      {/* ABOUT */}
      <section className="section">
        <h2>About CodeMyProject</h2>
        <p>
          CodeMyProject is a student-focused service where I help college students
          with website projects, mini projects, and Arduino projects for academic purposes.
          All projects include complete source code, explanation, and viva support.
        </p>
      </section>

      {/* SERVICES */}
      <section className="section services">
        <h2>My Services</h2>

        <div className="card">
          <h3>Website Projects</h3>
          <p>HTML, CSS, JavaScript & React projects for college submission.</p>
          <span>Starting from ₹1,999</span>
        </div>

        <div className="card">
          <h3>Mini Projects</h3>
          <p>CSE mini projects with source code and full explanation.</p>
          <span>Starting from ₹2,499</span>
        </div>

        <div className="card">
          <h3>Arduino Projects</h3>
          <p>Arduino & IoT projects with circuit diagram and demo explanation.</p>
          <span>Starting from ₹3,999</span>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section why">
        <h2>Why Choose CodeMyProject?</h2>
        <ul>
          <li>✔ Affordable pricing for students</li>
          <li>✔ Complete source code provided</li>
          <li>✔ Project explanation for viva & practical exams</li>
          <li>✔ On-time delivery</li>
          <li>✔ Friendly student support</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h2>How It Works</h2>
        <ol className="steps">
          <li>Contact me on WhatsApp</li>
          <li>Share your project requirements</li>
          <li>Get project with explanation</li>
        </ol>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <h2>Contact Me</h2>
        <p>Quick response on WhatsApp</p>

        <a
          className="btn"
          href="https://wa.me/91YOURNUMBER?text=Hi%20I%20need%20a%20college%20project"
        >
          WhatsApp Me
        </a>

        <p>Email: codemyproject@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 CodeMyProject | Built for Students</p>
      </footer>
    </>
  )
}

export default App