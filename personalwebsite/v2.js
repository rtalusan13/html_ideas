import React, { useState } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  // Mock Resume Data
  const resumeData = {
    about: {
      name: "Raphael Talusan",
      title: "Computer Engineering Student | Developer | Innovator",
      summary:
        "Passionate computer engineering student with a strong foundation in software development, embedded systems, and problem-solving. Seeking to apply academic knowledge and practical experience to real-world challenges.",
    },
    education: [
      {
        degree: "B.S. in Computer Engineering",
        school: "Tech University",
        year: "2021 - 2025",
        gpa: "3.9/4.0",
        honors: "Dean's List (Fall '22, Spring '24)",
      },
    ],
    experience: [
      {
        role: "Software Development Intern",
        company: "InnovateX Inc.",
        year: "Summer 2024",
        description:
          "Developed and maintained web applications using React.js and Node.js. Collaborated with cross-functional teams to deliver scalable solutions for clients.",
      },
      {
        role: "Embedded Systems Research Assistant",
        company: "Tech University Lab",
        year: "2023 - Present",
        description:
          "Worked on IoT-based sensor networks and firmware development for microcontroller units (MCUs). Implemented data logging and wireless communication protocols.",
      },
    ],
    projects: [
      {
        title: "Smart Home Automation System",
        tech: "React, Node.js, ESP32, Firebase",
        description:
          "Designed a full-stack home automation system that allows users to control lights, temperature, and security through a mobile interface.",
      },
      {
        title: "Personal Portfolio Website",
        tech: "React, Tailwind CSS",
        description:
          "Built a responsive and visually appealing portfolio website to showcase academic and personal projects.",
      },
      {
        title: "AI-Based Sentiment Analyzer",
        tech: "Python, TensorFlow, Flask",
        description:
          "Created a machine learning model trained on movie reviews to predict sentiment. Integrated the model into a web app with Flask backend.",
      },
    ],
    skills: [
      "JavaScript", "TypeScript", "React", "Node.js", "Python", "C/C++", 
      "Java", "Git", "Tailwind CSS", "Firebase", "Figma", "Linux"
    ],
    contact: {
      email: "rtalu@illinois.edu",
      //phone: "+1 (555) 123-4567",
      linkedin: "linkedin.com/in/raphael-talusan",
      github: "github.com/rtalusan13",
    },
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Alex Johnson
          </h1>
          <nav className="space-x-6 hidden md:flex">
            <button onClick={() => setActiveSection("about")} className={`${activeSection === "about" ? "text-blue-400" : "hover:text-blue-300"} transition`}>
              About
            </button>
            <button onClick={() => setActiveSection("resume")} className={`${activeSection === "resume" ? "text-blue-400" : "hover:text-blue-300"} transition`}>
              Resume
            </button>
            <button onClick={() => setActiveSection("projects")} className={`${activeSection === "projects" ? "text-blue-400" : "hover:text-blue-300"} transition`}>
              Projects
            </button>
            <button onClick={() => setActiveSection("contact")} className={`${activeSection === "contact" ? "text-blue-400" : "hover:text-blue-300"} transition`}>
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 space-y-24">
        {/* About Section */}
        {activeSection === "about" && (
          <section className="max-w-4xl mx-auto animate-fadeIn">
            <h2 className="text-4xl font-bold mb-6 border-b-2 pb-2 inline-block border-blue-500">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img
                src="https://placehold.co/300x300/3b82f6/ffffff?text=AJ"
                alt="Profile"
                className="rounded-full w-40 h-40 object-cover shadow-xl border-4 border-blue-500"
              />
              <div>
                <h3 className="text-2xl font-semibold">{resumeData.about.name}</h3>
                <p className="text-sm text-gray-400">{resumeData.about.title}</p>
                <p className="mt-4 text-gray-300">{resumeData.about.summary}</p>
              </div>
            </div>
          </section>
        )}

        {/* Resume Section */}
        {activeSection === "resume" && (
          <section className="max-w-4xl mx-auto animate-fadeIn">
            <h2 className="text-4xl font-bold mb-6 border-b-2 pb-2 inline-block border-blue-500">
              Resume
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Education</h3>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="mt-4 p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition">
                    <div className="flex justify-between">
                      <strong>{edu.degree}</strong>
                      <span className="text-gray-400">{edu.year}</span>
                    </div>
                    <p className="text-gray-300">{edu.school}</p>
                    <p className="text-sm text-gray-400 mt-1">GPA: {edu.gpa} | {edu.honors}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold">Experience</h3>
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="mt-4 p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition">
                    <div className="flex justify-between">
                      <strong>{exp.role}</strong>
                      <span className="text-gray-400">{exp.year}</span>
                    </div>
                    <p className="text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-400 mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {resumeData.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section className="max-w-6xl mx-auto animate-fadeIn">
            <h2 className="text-4xl font-bold mb-6 border-b-2 pb-2 inline-block border-blue-500">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 hover:border hover:border-blue-500 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section className="max-w-4xl mx-auto animate-fadeIn">
            <h2 className="text-4xl font-bold mb-6 border-b-2 pb-2 inline-block border-blue-500">
              Contact Me
            </h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition">
                  Send Message
                </button>
              </form>
              <div className="mt-6 text-sm text-gray-400">
                <p>Email: {resumeData.contact.email}</p>
                <p>Phone: {resumeData.contact.phone}</p>
                <p>LinkedIn: <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{resumeData.contact.linkedin}</a></p>
                <p>GitHub: <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{resumeData.contact.github}</a></p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.
      </footer>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 flex justify-around py-3 shadow-inner">
        <button onClick={() => setActiveSection("about")} className={`${activeSection === "about" ? "text-blue-400" : "hover:text-blue-300"} transition`}>
          About
        </button>
        <button onClick={() => setActiveSection("resume")} className={`${activeSection === "resume" ? "text-blue-400" : "hover:text-blue-300"} transition`}>
          Resume
        </button>
        <button onClick={() => setActiveSection("projects")} className={`${activeSection === "projects" ? "text-blue-400" : "hover:text-blue-300"} transition`}>
          Projects
        </button>
        <button onClick={() => setActiveSection("contact")} className={`${activeSection === "contact" ? "text-blue-400" : "hover:text-blue-300"} transition`}>
          Contact
        </button>
      </nav>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
