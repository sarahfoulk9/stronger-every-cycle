export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#0B0F14",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Stronger Every Cycle
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "#A1A1AA",
            maxWidth: "700px",
            margin: "0 auto 40px",
          }}
        >
          Physiology education for female athletes on topics of hormones, nutrition, and performance.
        </p>

        <a
          href="mailto:sarah@strongereverycycle.com"
          style={{
            backgroundColor: "#f3430c",
            color: "white",
            padding: "14px 28px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Bring a Workshop to Your Team
        </a>
      </section>

      {/* Credibility */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 24px",
          textAlign: "center",
          color: "#A1A1AA",
        }}
      >
        <p>Kinesiology Professor • Lifestyle Coach • Female Performance Specialist</p>
      </section>

      {/* Mission */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Our Mission
        </h2>

        <p
          style={{
            color: "#A1A1AA",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Stronger Every Cycle helps athletes and coaches better understand
          female physiology so training, recovery, and nutrition can support
          long-term performance and health.
        </p>
      </section>

      {/* Workshop Topics */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "120px 24px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "60px",
          }}
        >
          Workshop Topics
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            "Hormones & Performance",
            "Cycle-Aware Training",
            "Female Athlete Nutrition",
            "Recovery & Injury Risk",
          ].map((topic) => (
            <div
              key={topic}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "30px",
              }}
            >
              <h3>{topic}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Bring Stronger Every Cycle to Your Athletes
        </h2>

        <p
          style={{
            color: "#A1A1AA",
            marginBottom: "30px",
          }}
        >
          Workshops designed for colleges, competitive teams, and coaches.
        </p>

        <a
          href="mailto:sarah@strongereverycycle.com"
          style={{
            backgroundColor: "#f3430c",
            color: "white",
            padding: "14px 28px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Contact Sarah
        </a>
      </section>
    </div>
  );
}
