import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Github, Mail, ExternalLink, Menu, X, Code, Briefcase, User, GraduationCap, Heart, Linkedin, Facebook } from 'lucide-react';

function FallingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const star = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2,
        size: 4 + Math.random() * 6,
        color: Math.random() > 0.5 ? 'bg-purple-400' : 'bg-red-400'
      };
      setStars(prev => [...prev.slice(-30), star]);
    };

    const interval = setInterval(createStar, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0">
        {stars.map(star => (
          <div
            key={star.id}
            className={`absolute ${star.color} rounded-full opacity-90`}
            style={{
              left: `${star.left}%`,
              top: '-20px',
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `fall ${star.duration}s linear ${star.delay}s forwards`,
              boxShadow: `0 0 ${star.size * 4}px ${star.color === 'bg-purple-400' ? '#c084fc' : '#f87171'}, 0 0 ${star.size * 2}px ${star.color === 'bg-purple-400' ? '#a855f7' : '#ef4444'}`
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-purple-500/30 shadow-lg shadow-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
            EP Portfolio
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/education', label: 'Education' },
              { path: '/skills', label: 'Skills' },
              { path: '/hobbies', label: 'Hobbies' },
              { path: '/projects', label: 'Projects' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors font-medium ${
                  isActive(item.path)
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                {item.label}
              </Link>
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
        <div className="md:hidden bg-black/95 border-t border-purple-500/30">
          <div className="px-4 py-4 space-y-3">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/education', label: 'Education' },
              { path: '/skills', label: 'Skills' },
              { path: '/hobbies', label: 'Hobbies' },
              { path: '/projects', label: 'Projects' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-300 hover:text-purple-400 py-2 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        <div className="mb-8">
          <div className="w-64 h-80 sm:w-80 sm:h-96 mx-auto rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-red-600 p-1 shadow-2xl overflow-hidden">
            <img 
              src={`${process.env.PUBLIC_URL}/profile.jpg`}
              alt="Emmanuel Paje" 
              className="w-full h-full rounded-3xl object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><rect width="400" height="500" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="72" fill="white" font-weight="bold">EP</text></svg>';
              }}
            />
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
             className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-all transform hover:scale-110 shadow-lg shadow-purple-500/50">
            <Github className="text-white" size={24} />
          </a>
          
          <a href="https://www.linkedin.com/in/emmanuel-paje-56a103335/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all transform hover:scale-110 shadow-lg shadow-blue-500/50">
            <Linkedin className="text-white" size={24} />
          </a>
          
          <a href="https://www.facebook.com/emmanueljamiropaje" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110 shadow-lg shadow-blue-400/50">
            <Facebook className="text-white" size={24} />
          </a>
          
          <a href="mailto:eopaje@student.apc.edu.ph"
             className="p-3 bg-red-600 hover:bg-red-700 rounded-full transition-all transform hover:scale-110 shadow-lg shadow-red-500/50">
            <Mail className="text-white" size={24} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-red-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg">
            View My Work
          </Link>
          <Link 
            to="/contact"
            className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg border border-purple-500/30">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-center mb-12">
          <User className="text-purple-400 mr-3" size={32} />
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </div>
        
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-xl shadow-purple-500/10">
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
    </div>
  );
}

function EducationPage() {
  return (
    <div className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-center mb-12">
          <GraduationCap className="text-purple-400 mr-3" size={32} />
          <h2 className="text-4xl font-bold text-white">Education</h2>
        </div>
        
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 shadow-xl shadow-red-500/10">
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
    </div>
  );
}

function SkillsPage() {
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

  return (
    <div className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-center mb-12">
          <Code className="text-purple-400 mr-3" size={32} />
          <h2 className="text-4xl font-bold text-white">Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-red-500/50 transition-all hover:transform hover:scale-105 shadow-xl shadow-purple-500/10 hover:shadow-red-500/20">
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
    </div>
  );
}

function HobbiesPage() {
  const hobbies = [
    { name: "Biking", icon: "🚴", details: "I ride my bike around Manila - exploring places like Binondo, MOA, Rizal Park, Antipolo, Cavite, and discovering new routes across the city." },
    { name: "Watching Anime", icon: "📺", details: "Date A Live, Black Clover, Naruto, and many more. I'm always watching the latest seasonal anime." },
    { name: "Reading Manga", icon: "📚", details: "I'm a huge fan of harem, isekai, and romance genres. I read tons of manga, manhwa, and webtoons whenever I have free time." },
    { name: "Gaming", icon: "🎮", details: "League of Legends, Brawlhalla, Mobile Legends, Wild Rift - I play competitively and casually with friends." }
  ];

  return (
    <div className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-center mb-12">
          <Heart className="text-purple-400 mr-3" size={32} />
          <h2 className="text-4xl font-bold text-white">Hobbies & Interests</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {hobbies.map((hobby, idx) => (
            <div key={idx} className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 shadow-xl shadow-red-500/10 hover:shadow-purple-500/20">
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
    </div>
  );
}

function ProjectsPage() {
  const projects = [
    {
      title: "QR Code Attendance Monitoring System",
      description: "An attendance monitoring system using QR code technology for Universal College of Parañaque. Students scan QR codes to mark their attendance automatically.",
      tech: ["React", "Node.js", "QR Code API", "MongoDB"],
      github: "https://github.com/Emmnuelpaje/qr-attendance",
      live: "https://qr-attendance-demo.com"
    },
    {
      title: "Weather API Application",
      description: "A weather application that fetches real-time weather data using API integration. Shows current conditions, forecasts, and weather alerts.",
      tech: ["React", "Weather API", "JavaScript", "CSS3"],
      github: "https://github.com/Emmnuelpaje/weather-app",
      live: "https://weather-app-demo.com"
    },
    {
      title: "TRJ Delivery Business Website",
      description: "A professional business website for TRJ Delivery service, featuring service information, contact forms, and tracking system.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      github: "https://github.com/Emmnuelpaje/trj-delivery",
      live: "https://trj-delivery.com"
    },
    {
      title: "Girlfriend's Day Special Site",
      description: "A personalized website created for my girlfriend on Girlfriend's Day, featuring photos, messages, and interactive elements.",
      tech: ["React", "CSS Animations", "JavaScript"],
      github: "https://github.com/Emmnuelpaje/gf-day-site",
      live: "https://gf-day-special.com"
    }
  ];

  return (
    <div className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-center mb-12">
          <Briefcase className="text-purple-400 mr-3" size={32} />
          <h2 className="text-4xl font-bold text-white">My Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/30 hover:border-red-500/50 transition-all hover:transform hover:scale-105 shadow-xl shadow-purple-500/10 hover:shadow-red-500/20">
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
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center w-full">
        <div className="flex items-center justify-center mb-12">
          <Mail className="text-purple-400 mr-3" size={32} />
          <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
        </div>
        
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-xl shadow-purple-500/10 mb-8">
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
            <a href="https://www.linkedin.com/in/emmanuel-paje-56a103335/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="https://www.facebook.com/emmanueljamiropaje" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-500 transition-colors">
              <Facebook size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-purple-500/30 bg-black/80">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 mb-2">
          © 2025 Emmanuel Paje. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Built with React & Tailwind CSS | BSCS-SF 242
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router basename="/my-portfolio">
      <div className="min-h-screen bg-black">
        <FallingStars />
        <div className="relative z-10">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/hobbies" element={<HobbiesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}