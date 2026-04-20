import { useEffect } from "react";

function App() {
  const projects = [
    {
      title: "Network Scanner",
      description:
        "Python-based tool for scanning IP ranges, detecting open ports, and identifying active services.",
      link: "https://github.com/Tanmoy-Chandra-Dey",
    },
    {
      title: "Phishing Email Detector",
      description:
        "AI-powered phishing email detector using machine learning.",
      link: "https://github.com/Tanmoy-Chandra-Dey",
    },
    {
      title: "Password Strength Checker",
      description:
        "Security tool that analyzes password strength and suggests stronger passwords.",
      link: "https://github.com/Tanmoy-Chandra-Dey",
    },
  ];

  const skills = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Cybersecurity",
      logo: "https://cdn-icons-png.flaticon.com/512/2092/2092063.png",
    },
    {
      name: "Network Security",
      logo: "https://cdn-icons-png.flaticon.com/512/1048/1048947.png",
    },
    {
      name: "Machine Learning",
      logo: "https://cdn-icons-png.flaticon.com/512/4149/4149670.png",
    },
  ];

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const cursorDot = document.querySelector(".custom-cursor-dot");

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
      if (cursorDot) {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="app">
      <div className="custom-cursor"></div>
      <div className="custom-cursor-dot"></div>

      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <svg className="network-bg" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <line x1="100" y1="100" x2="220" y2="180" />
        <line x1="220" y1="180" x2="340" y2="120" />
        <line x1="340" y1="120" x2="420" y2="240" />
        <line x1="420" y1="240" x2="520" y2="180" />
        <line x1="800" y1="100" x2="920" y2="180" />
        <line x1="920" y1="180" x2="1020" y2="140" />
        <line x1="1020" y1="140" x2="1100" y2="240" />
        <line x1="200" y1="520" x2="300" y2="620" />
        <line x1="300" y1="620" x2="440" y2="560" />
        <line x1="440" y1="560" x2="520" y2="700" />
        <line x1="780" y1="500" x2="860" y2="620" />
        <line x1="860" y1="620" x2="980" y2="540" />
        <line x1="980" y1="540" x2="1080" y2="680" />

        <circle cx="100" cy="100" r="4" />
        <circle cx="220" cy="180" r="4" />
        <circle cx="340" cy="120" r="4" />
        <circle cx="420" cy="240" r="4" />
        <circle cx="520" cy="180" r="4" />
        <circle cx="800" cy="100" r="4" />
        <circle cx="920" cy="180" r="4" />
        <circle cx="1020" cy="140" r="4" />
        <circle cx="1100" cy="240" r="4" />
        <circle cx="200" cy="520" r="4" />
        <circle cx="300" cy="620" r="4" />
        <circle cx="440" cy="560" r="4" />
        <circle cx="520" cy="700" r="4" />
        <circle cx="780" cy="500" r="4" />
        <circle cx="860" cy="620" r="4" />
        <circle cx="980" cy="540" r="4" />
        <circle cx="1080" cy="680" r="4" />
      </svg>

      <header className="navbar fade-down">
        <div className="logo">
          <div className="logo-circle glow">TD</div>
          <div>
            <h2>Tanmoy Chandra Dey</h2>
            <p>Cybersecurity • Software Development</p>
          </div>
        </div>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero fade-up">
        <p className="tag">Open to internships in Brisbane</p>

        <h1>
          Cybersecurity & Software Development
          <span className="highlight"> Portfolio</span>
        </h1>

        <p className="hero-text">
          I am a QUT IT student focused on cybersecurity, software development,
          and AI. I build practical projects and I am looking for internship
          opportunities.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" className="section fade-up delay-1">
        <h2>About Me</h2>
        <div className="card hover-lift">
          <p>
            I am an Information Technology student at QUT with interests in
            cybersecurity, software engineering, and artificial intelligence. I
            enjoy building real-world tools and improving my practical skills
            through hands-on projects.
          </p>
        </div>
      </section>

      <section id="projects" className="section fade-up delay-2">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card hover-lift" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section fade-up delay-2">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card hover-lift" key={skill.name}>
              <img src={skill.logo} alt={skill.name} className="skill-img" />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section fade-up delay-3">
        <h2>Contact</h2>
        <div className="contact-grid">
          <div className="card hover-lift">
            <h3>Email</h3>
            <p>info@tanmoy.alive</p>
          </div>

          <div className="card hover-lift">
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/your-linkedin/"
              target="_blank"
              rel="noreferrer"
            >
              My LinkedIn
            </a>
          </div>

          <div className="card hover-lift">
            <h3>GitHub</h3>
            <a
              href="https://github.com/Tanmoy-Chandra-Dey"
              target="_blank"
              rel="noreferrer"
            >
              My GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;