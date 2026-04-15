import { motion } from "framer-motion";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", background: "#f9fafb" }}>
      {/* HEADER */}
      <header style={{ maxWidth: "900px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Stronger Every Cycle</h1>
        <nav>
          <a href="#mission" style={{ marginRight: "15px" }}>Mission</a>
          <a href="#testimonials" style={{ marginRight: "15px" }}>Testimonials</a>
          <a href="#book">Book</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 0" }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Train with Purpose. Perform with Confidence.
        </motion.h2>
        <p style={{ color: "#555" }}>
          Helping athletes and active individuals build strength, confidence, and consistency through evidence-based coaching.
        </p>
        <a href="#book">
          <button style={{ padding: "12px 20px", fontSize: "16px", marginTop: "20px" }}>
            Book a Free Call
          </button>
        </a>
      </section>

      {/* MISSION */}
      <section id="mission" style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 0" }}>
        <h3 style={{ textAlign: "center" }}>Our Mission</h3>
        <p style={{ textAlign: "center", color: "#555" }}>
          At Stronger Every Cycle, our mission is to empower individuals through intentional training that bridges science and performance.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 0" }}>
        <h3 style={{ textAlign: "center" }}>Testimonials</h3>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {["I’ve never felt stronger.", "Coaching changed everything.", "Best program ever."].map((t, i) => (
            <div key={i} style={{ flex: 1, minWidth: "250px", background: "white", padding: "20px", borderRadius: "10px" }}>
              <p>"{t}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" style={{ textAlign: "center", padding: "60px 0" }}>
        <h3>Ready to Get Started?</h3>
        <p style={{ color: "#555" }}>Book your free consultation call.</p>
        <a href="https://calendly.com/your-link" target="_blank">
          <button style={{ padding: "12px 20px", fontSize: "16px" }}>
            Schedule Your Call
          </button>
        </a>
      </section>

      <footer style={{ textAlign: "center", padding: "20px", color: "#777" }}>
        © {new Date().getFullYear()} Stronger Every Cycle
      </footer>
    </div>
  );
}





















