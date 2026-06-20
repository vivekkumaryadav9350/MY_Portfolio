import "./App.css";

function App() {
  return (
    <>


      {/* Header */}
      <header>
        <div className="container">
          <nav>
            <h2 className="logo">Vivek.</h2>

            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
               
                
            </ul>
          </nav>
        </div>
      </header>




      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span>Vivek Kumar</span>
            </h1>
            <h2>Frontend Developer <span>Software Engineer</span></h2>
            <p>
              I build modern, responsive and user-friendly web applications
              using React.js, JavaScript, HTML and CSS.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn">
                View Projects
              </a>

              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="\profile.jpg.jpeg"
              alt="Profile"
            />
          </div>
        </div>
      </section>


      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>

          <p className="about-text">
          Hi, I'm Vivek Kumar, a B.Tech student in Artificial Intelligence and Data Science. I am passionate about web development and have experience building responsive websites and web applications using HTML, CSS, JavaScript, React.js, and TypeScript. I also have knowledge of Node.js and MySQL. I enjoy learning new technologies and creating projects that solve real-world problems. 🚀
          </p>
        </div>
      </section>




      {/* Skills */}
      <section id="skills" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Skills</h2>

          <div className="skills-grid">
            <div className="skill-card">HTML</div>
            <div className="skill-card">CSS</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">React JS</div>
            <div className="skill-card">Git</div>
            <div className="skill-card">GitHub</div>
            <div className="skill-card">MySql</div>
            <div className="skill-card">TypeScript</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">BootStrap</div>
            <div className="skill-card">Tailwind</div>
          </div>
        </div>
      </section>



      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">



             {/* weather app */}
            <div className="project-card">
              <img
                src="\Weather-App.png"
                alt="Project"
              />

              
              <h3>Weather App</h3>
              <p>
                A React Weather Application that fetches live weather data using
                APIs.
              </p>

              <div className="project-buttons">
               <a href="https://weather-app-seven-teal-24.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>

                <a href="https://github.com/vivekkumaryadav9350">GitHub</a>
              </div>
            </div>




             {/* Ecommerce */}

            <div className="project-card">
              <img
                src="\ecommerce-layout-react.png"
                alt="Project"
              />
              <h3>E-Commerce Website</h3>
              <p>
                Responsive e-commerce website built using React and API data.
              </p>

              <div className="project-buttons">
              
<a href="https://e-commerce-layout.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/vivekkumaryadav9350">GitHub</a>
              </div>
            </div>




                {/* Password Generator */}

            <div className="project-card">
              <img
                src="\password_generator.png"
                alt="Project"
              />
              <h3>Password Generator</h3>
              <p>
                Generates strong and secure passwords with custom options.
              </p>

              <div className="project-buttons">
                <a href="https://password-generator-rosy-phi.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/vivekkumaryadav9350">GitHub</a>
              </div>
            </div>




             {/* TO-DO-List */}

            <div className="project-card">
              <img
                src="\to-do-list.png"
                alt="Project"
              />
              <h3>TO-DO-LIST</h3>
              <p>
               A simple task management application that allows users to add, edit, complete, and delete tasks efficiently.
              </p>

              <div className="project-buttons">
                <a href="https://to-do-list-eta-cyan.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/vivekkumaryadav9350">GitHub</a>
              </div>

               </div>




                {/* Amazon-Landing Page */}
               
               <div className="project-card">
              <img
                src="\amazon-landing.png"
                alt="Project"
              />
              <h3>Amazon-Landing-Page</h3>
              <p>
              A responsive Amazon homepage clone featuring a modern UI, product sections, navigation bar, search functionality, and mobile-friendly design.
              </p>

              <div className="project-buttons">
               <a href="https://amazon-landing-page-clone-iota.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/vivekkumaryadav9350">GitHub</a>
              </div> 
</div>


            

                 {/* Currency Convertor */}

               <div className="project-card">
              <img
                src="\curency_Convertor.png"
                alt="Project"
              />
              <h3>Currency-Convertor</h3>
              <p>
A simple web application that allows users to convert one currency into another using real-time exchange rates.
              </p>

              <div className="project-buttons">
               <a href="https://currency-convertor-seven-delta.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/vivekkumaryadav9350">GitHub</a>
              </div> 
</div>






                    {/* Tic-Tac-Toe */}


 <div className="project-card">
              <img
                src="\Tic-Tac-Toe.png"
                alt="Project"
              />
              <h3>Tic-Tac-Toe</h3>
              <p>
**Tic-Tac-Toe Game:**
A simple two-player Tic-Tac-Toe game built with an interactive user interface. Players take turns marking X and O on the grid, and the game automatically detects the winner or a draw. 🎮🚀


              </p>

              <div className="project-buttons">
               <a href="https://tic-tac-toe-game-green-ten.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/vivekkumaryadav9350">GitHub</a>
              </div> 


              

            </div>
          </div>
        </div>
      </section>




      {/* Contact */}
      <section id="contact" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>

          <div className="contact-box">
            <p>Email: Vivekkumaryadav98282@gmail.com <span>&#9993;</span></p>
            <p>Phone: +91 9350162703<span>&#9742;</span></p>
            <p>Location: Bikaner,Rajasthan, India<span>&#127968;</span></p>
          </div>
        </div>
      </section>






      {/* Footer */}
      <footer>
        <p>© 2026 Vivek Kumar. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;