const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const closeBtn = document.getElementById('close-btn');

  // Toggle Sidebar when hamburger icon is clicked
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close Sidebar when close icon (×) is clicked
  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });

// Define projects as objects
const projects = [
    {
        title: "Portfolio Website",
        description: "A responsive and interactive personal portfolio website designed to showcase my skills, projects, education, and experience. Features include a dynamic project gallery, animated skill cards, and integrated social media links to provide a comprehensive overview of my work and capabilities.",
        type: "web",
        link: "https://kamalaportfolio.netlify.app/",
        image: "images/pro_portfolio.png"
    },
    {
        title: "Automated Hardware & Software Information Fetcher",
        description: "Developed a web app to automatically fetch hardware details (CPU, monitor, serial numbers) and software version (SAP, Windows, Trellix).Implemented a dynamic PM report form for real-time tracking and reporting.",
        type: "python",
        link: "https://github.com/Kamala16032001/PM-Report",
        image: "images/pro_PMreport.png"
    },
    {
        title: "Car Booking System (Web-Based)",
        description: "Developed a web-based system for employees to book cars, with admin can approve or reject car bookings based on availability.Integrated email notifications to alert admins of new bookings, and notify employees about the admin’s response(approval or rejection).",
        type: "python",
        link: "https://github.com/Kamala16032001/PM-Report",
        image: "images/pro_Carbook.png"
    }
];


const container = document.getElementById("projects-container");

function displayProjects(projects) {
    container.innerHTML = ""; // Clear old content
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = `project-card ${project.type}`;

      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;

      container.appendChild(card);
    });
  }

  // Initially display all projects
  displayProjects(projects);

  // Optional: hook up to your filter buttons
  function filterProjects(category) {
    if (category === "all") {
      displayProjects(projects);
    } else {
      const filtered = projects.filter(p => p.type === category);
      displayProjects(filtered);
    }
  }

