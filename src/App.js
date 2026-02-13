import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "NBA Interactive Presentation",
      category: "Sports Branding",
      types: ["presentation", "interactive"],
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
      description:
        "Dynamic presentation deck with custom animations and interactive data visualizations for NBA team analytics.",
      technologies: ["React", "D3.js", "GSAP"],
      link: null
    },
    {
      id: 2,
      title: "MNTA Brand Campaign",
      category: "Transportation",
      types: ["brochure", "flyer", "social"],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
      description:
        "Complete marketing campaign including print materials, digital assets, and social media content.",
      technologies: ["Illustrator", "After Effects", "Figma"],
      link: null
    },
    {
      id: 3,
      title: "University Rec Center Rebrand",
      category: "Higher Education",
      types: ["brochure", "web", "social"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      description:
        "Comprehensive visual identity and promotional materials reaching 10,000+ students and members.",
      technologies: ["Photoshop", "InDesign", "Premiere Pro"],
      link: null
    },
    {
      id: 4,
      title: "Sports Analytics Dashboard",
      category: "Data Visualization",
      types: ["interactive", "web"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description:
        "Interactive web-based dashboard for real-time sports statistics and team performance metrics.",
      technologies: ["React", "Chart.js", "Node.js"],
      link: null
    },
    {
      id: 5,
      title: "Event Promotion Series",
      category: "Marketing Materials",
      types: ["flyer", "poster", "social"],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      description:
        "Eye-catching promotional materials for campus events with cohesive branding.",
      technologies: ["Illustrator", "Photoshop"],
      link: null
    },
    {
      id: 6,
      title: "Brand Guidelines Interactive",
      category: "Corporate Identity",
      types: ["interactive", "web", "presentation"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
      description:
        "Interactive brand guidelines platform with live examples and downloadable assets.",
      technologies: ["React", "Tailwind", "Framer Motion"],
      link: null
    }
  ];

  const typeCategories = [
    { id: 'presentation', name: 'Presentations', icon: '📊' },
    { id: 'interactive', name: 'Interactive', icon: '⚡' },
    { id: 'brochure', name: 'Brochures', icon: '📄' },
    { id: 'flyer', name: 'Flyers & Posters', icon: '📋' },
    { id: 'web', name: 'Web Design', icon: '🌐' },
    { id: 'social', name: 'Social Media', icon: '📱' },
    { id: 'poster', name: 'Posters', icon: '🎨' }
  ];

  const getProjectsByType = (type) =>
    projects.filter(project => project.types.includes(type));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <a className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            KK
          </a>

          <div className="hidden md:flex gap-8 items-center">
            <a href="/work" className="text-gray-300 hover:text-purple-400 transition-colors">Work</a>
            <a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
            <a href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>

            <div className="flex gap-4">
              <a
                href="https://github.com/kotzerkendra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <button
            type="button"
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-6xl font-bold text-white mb-6">
            Design Engineer
            <span className="block text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text">
              & Creative Technologist
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Crafting interactive experiences where design meets code.
          </p>

          <div className="flex gap-4">
            <a href="/work" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
              View Work
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};
