import React, { useState } from 'react';
import { Github, Mail, ExternalLink, Menu, X, Code, Briefcase, User, GraduationCap, Heart } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/Emmnuelpaje/ecommerce-project",
      live: "https://ecommerce-demo.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/Emmnuelpaje/task-manager",
      live: "https://taskmanager-demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location search, forecasts, and beautiful data visualizations.",
      tech: ["React", "API Integration", "Chart.js"],
      github: "https://github.com/Emmnuelpaje/weather-app",
      live: "https://weather-demo.com"
    }
  ];

  const skills = [
    { 
      category: "Frontend", 
      items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] 
    },
    { 
      category: "Backend", 
      items: ["Node.js", "Express", "Python", "REST APIs"] 
    },
    { 
      category: "Database", 
      items: ["MongoDB", "PostgreSQL", "Firebase"] 
    },
    { 
      category: "Tools", 
      items: ["Git", "GitHub", "VS Code", "Figma"] 
    }
  ];

  const hobbies = [
    { name: "Biking", icon: "🚴" },
    { name: "Watching Anime", icon: "📺", details: "Date A Live, Black Clover, Naruto" },
    { name: "Reading Manga", icon: "📚" },
    { name: "Gaming", icon: "🎮", details: "League of Legends, Brawlhalla, ML, Wild Rift" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-red-900">
      
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-purple-500/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent cursor-pointer"
                 onClick={() => scrollToSection('home')}>
              EP Portfolio
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'education', 'skills', 'hobbies', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors font-medium ${
                    activeSection === section
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'education', 'skills', 'hobbies', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize text-gray-300 hover:text-purple-400 py-2 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          <div className="mb-8">
            <div className="w-64 h-80 sm:w-80 sm:h-96 mx-auto rounded-3xl bg-gradient-to-br from-purple-600 to-red-600 p-1 shadow-2xl">
              <img src="/profile.jpg" alt="Emmanuel Paje" className="w-full h-full rounded-3xl object-cover" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">Emmanuel Paje</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            Full Stack Developer | BSCS Student
          </p>
          
          <p className="text-lg text-purple-300 mb-8 max-w-2xl mx-auto font-semibold italic">
            "Forget the past, it only clouds the future"
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://github.com/Emmnuelpaje" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="p-3 bg-slate-800 hover:bg-purple-600 rounded-full transition-all transform hover:scale-110 shadow-lg">
              <Github className="text-white" size={24} />
            </a>
            
            <a href="mailto:eopaje@student.apc.edu.ph"
               className="p-3 bg-slate-800 hover:bg-red-600 rounded-full transition-all transform hover:scale-110 shadow-lg">
              <Mail className="text-white" size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-red-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg">
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-slate-800 text-white font-semibold rounded-full hover:bg-slate-700 transition-all transform hover:scale-105 shadow-lg border border-purple-500/30">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <User className="text-purple-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-white">About Me</h2>
          </div>
          
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20 shadow-xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm Emmanuel Paje, a passionate Computer Science student at Asia Pacific College. 
              I believe in moving forward and not letting the past hold me back - my motto is 
              "Forget the past, it only clouds the future."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              As a full stack developer, I specialize in building responsive and user-friendly web applications 
              using React, Node.js, and modern frameworks. I'm constantly learning new technologies and 
              improving my skills to create better solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me biking around the city, watching anime like Date A Live and 
              Black Clover, reading manga, or playing games like League of Legends and Wild Rift with friends.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <GraduationCap className="text-purple-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-white">Education</h2>
          </div>
          
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20 shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-red-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white" size={32} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-purple-300 text-lg mb-2">
                  Asia Pacific College
                </p>
                <p className="text-gray-400 mb-4">
                  Section: BSCS-SF 242
                </p>
                <p className="text-gray-300">
                  Specializing in Software Development with focus on Full Stack Web Development, 
                  Database Management, and Software Engineering principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Code className="text-purple-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-white">Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20 hover:border-red-500/40 transition-all hover:transform hover:scale-105 shadow-xl">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-red-400 rounded-full mr-3"></span>
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <li key={skillIdx} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hobbies" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Heart className="text-purple-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-white">Hobbies & Interests</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {hobbies.map((hobby, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20 hover:border-red-500/40 transition-all hover:transform hover:scale-105 shadow-xl">
                <div className="flex items-center mb-3">
                  <span className="text-4xl mr-4">{hobby.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{hobby.name}</h3>
                </div>
                {hobby.details && (
                  <p className="text-gray-400 ml-16">{hobby.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className="text-purple-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-white">My Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-red-500/40 transition-all hover:transform hover:scale-105 shadow-xl">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIdx) => (
                      <span key={techIdx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a href={project.github} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center text-gray-300 hover:text-purple-400 transition-colors font-medium">
                      <Github size={20} className="mr-2" />
                      Code
                    </a>
                    <a href={project.live} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center text-gray-300 hover:text-red-400 transition-colors font-medium">
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <Mail className="text-purple-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
          </div>
          
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20 shadow-xl mb-8">
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm always open to new opportunities, collaborations, and interesting projects. 
              Whether you want to work together or just chat about anime and games, feel free to reach out!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="mailto:eopaje@student.apc.edu.ph"
                 className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-red-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg">
                <Mail size={20} className="mr-2" />
                Send Email
              </a>
            </div>

            <div className="flex justify-center space-x-6 pt-6 border-t border-purple-500/20">
              <a href="https://github.com/Emmnuelpaje" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-purple-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-2">
            © 2025 Emmanuel Paje. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with React & Tailwind CSS | BSCS-SF 242
          </p>
        </div>
      </footer>
    </div>
  );
}