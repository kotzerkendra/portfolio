import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "NBA Interactive Presentation",
      category: "Sports Branding",
      types: ["presentation", "interactive"],
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
      description: "Dynamic presentation deck with custom animations and interactive data visualizations for NBA team analytics.",
      technologies: ["React", "D3.js", "GSAP"],
      link: "#"
    },
    {
      id: 2,
      title: "MNTA Brand Campaign",
      category: "Transportation",
      types: ["brochure", "flyer", "social"],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
      description: "Complete marketing campaign including print materials, digital assets, and social media content for Minnesota Transportation Alliance.",
      technologies: ["Illustrator", "After Effects", "Figma"],
      link: "#"
    },
    {
      id: 3,
      title: "University Rec Center Rebrand",
      category: "Higher Education",
      types: ["brochure", "web", "social"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      description: "Comprehensive visual identity and promotional materials reaching 10,000+ students and members.",
      technologies: ["Photoshop", "InDesign", "Premiere Pro"],
      link: "#"
    },
    {
      id: 4,
      title: "Sports Analytics Dashboard",
      category: "Data Visualization",
      types: ["interactive", "web"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description: "Interactive web-based dashboard for real-time sports statistics and team performance metrics.",
      technologies: ["React", "Chart.js", "Node.js"],
      link: "#"
    },
    {
      id: 5,
      title: "Event Promotion Series",
      category: "Marketing Materials",
      types: ["flyer", "poster", "social"],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      description: "Eye-catching promotional materials for campus events with cohesive branding across multiple touchpoints.",
      technologies: ["Illustrator", "Photoshop"],
      link: "#"
    },
    {
      id: 6,
      title: "Brand Guidelines Interactive",
      category: "Corporate Identity",
      types: ["interactive", "web", "presentation"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
      description: "Interactive brand guidelines platform with live examples and downloadable assets for consistency across teams.",
      technologies: ["React", "Tailwind", "Framer Motion"],
      link: "#"
    }
  ];

  const typeCategories = [
    { id: 'presentation', name: 'Presentations', icon: '?' },
    { id: 'interactive', name: 'Interactive', icon: '?' },
    { id: 'brochure', name: 'Brochures', icon: '?' },
    { id: 'flyer', name: 'Flyers & Posters', icon: '?' },
    { id: 'web', name: 'Web Design', icon: '?' },
    { id: 'social', name: 'Social Media', icon: '?' },
    { id: 'poster', name: 'Posters', icon: '?' }
  ];

  const getProjectsByType = (type) => {
    return projects.filter(project => project.types.includes(type));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              KK
            </h1>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 items-center">
              <a href="#work" className="text-gray-300 hover:text-purple-400 transition-colors">Work</a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
              <div className="flex gap-4">
                <a href="https://github.com/kotzerkendra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#work" className="text-gray-300 hover:text-purple-400 transition-colors">Work</a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Design Engineer
              <span className="block text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text">
                & Creative Technologist
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Crafting interactive experiences where design meets code. Specializing in dynamic presentations, 
              data visualization, and user-centered digital solutions.
            </p>
            <div className="flex gap-4">
              <a 
                href="#work" 
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
              >
                View Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400/10 rounded-lg transition-colors font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12">Selected Work</h3>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-12 border-b border-purple-500/20">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 font-medium transition-all ${
                activeTab === 'projects'
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              By Project
            </button>
            <button
              onClick={() => setActiveTab('type')}
              className={`px-6 py-3 font-medium transition-all ${
                activeTab === 'type'
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              By Type
            </button>
          </div>

          {/* Projects View */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-slate-800 shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-purple-400 text-sm mb-2">{project.category}</p>
                      <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-purple-600/30 text-purple-300 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Type View */}
          {activeTab === 'type' && (
            <div className="space-y-12">
              {typeCategories.map((category) => {
                const categoryProjects = getProjectsByType(category.id);
                if (categoryProjects.length === 0) return null;
                
                return (
                  <div key={category.id}>
                    <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="text-3xl">{category.icon}</span>
                      {category.name}
                      <span className="text-sm text-gray-400 font-normal">({categoryProjects.length})</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryProjects.map((project) => (
                        <div
                          key={project.id}
                          className="group cursor-pointer"
                          onClick={() => setSelectedProject(project)}
                        >
                          <div className="relative overflow-hidden rounded-lg bg-slate-800 shadow-lg transition-transform duration-300 group-hover:scale-105">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h5 className="text-lg font-bold text-white">{project.title}</h5>
                              <p className="text-sm text-purple-400">{project.category}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">About Me</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm an Interactive Designer who bridges the gap between visual design and technical implementation. 
                Currently at SportsDigita, I create dynamic, code-enhanced presentations for major sports teams and brands.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                With a background in graphic design and a growing expertise in front-end development, I specialize in 
                transforming complex data and ideas into engaging, interactive experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not designing or coding, you can find me exploring new creative technologies, 
                attending design meetups, or working on personal projects that push the boundaries of web interactivity.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                <h4 className="text-purple-400 font-semibold mb-3">Design Tools</h4>
                <p className="text-gray-300">Figma, Adobe Creative Suite, Sketch, Principle</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                <h4 className="text-purple-400 font-semibold mb-3">Development</h4>
                <p className="text-gray-300">React, JavaScript, HTML/CSS, GSAP, D3.js, Three.js</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                <h4 className="text-purple-400 font-semibold mb-3">Specialties</h4>
                <p className="text-gray-300">Interactive Presentations, Data Visualization, UX/UI Design, Motion Graphics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Let's Work Together</h3>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="mailto:kotzerkendra@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium text-lg"
          >
            <Mail size={20} />
            Get in Touch
          </a>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/kotzerkendra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:kotzerkendra@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2026 Kendra Kotzer. Designed & Built with React.</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <p className="text-purple-400 text-sm mb-2">{selectedProject.category}</p>
              <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={selectedProject.link}
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
              >
                View Project
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;