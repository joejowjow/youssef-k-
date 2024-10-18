import React from 'react';
import { Film, Box, Edit, Play, User, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Trippy Edits & Montages",
    description: "A thrilling montage showcasing video editing skills for your needs",
    
  },
  {
    title: "Ultra-Realistic Product Animation",
    description: "Stunning 3D animation for a new smartphone launch, highlighting every detail",
    
  },
  {
    title: "CGI Fantasy World Animation",
    description: "Immersive CGI animation creating a breathtaking fantasy world for a game trailer",
  
  }
];

const freelancerProfileUrl = "https://www.freelancer.com/u/youssef506"; // Replace with your actual profile URL

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Box className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold">Youssef K</h1>
          </div>
          <nav className="flex items-center">
            <a href="#portfolio" className="mx-2 hover:text-gray-300">Portfolio</a>
            <a href="#services" className="mx-2 hover:text-gray-300">Services</a>
            <a href="#about" className="mx-2 hover:text-gray-300">About</a>
            <a href="#contact" className="mx-2 hover:text-gray-300">Contact</a>
            <a href={freelancerProfileUrl} target="_blank" rel="noopener noreferrer" className="ml-4 flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Hire Me <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-5xl font-bold mb-4">Bringing Your Imagination to Life</h2>
    <p className="text-xl mb-8">Video Edits | Montages | Ultra-Realistic Product Animations | CGI Animations</p>
    <a 
      href={freelancerProfileUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center justify-center bg-orange-600 text-white py-3 px-8 rounded-full font-bold hover:bg-orange-700 active:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
    >
      Hire Me
    </a>
  </div>
</section>


      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={project.videoUrl} 
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Edit className="w-16 h-16 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Video Editing</h3>
              <p className="text-gray-400">Professional video editing to perfect your footage</p>
            </div>
            <div className="text-center">
              <Play className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-bold mb-2">Montages</h3>
              <p className="text-gray-400">Compelling montages that tell your story</p>
            </div>
            <div className="text-center">
              <Box className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-bold mb-2">Product Animations</h3>
              <p className="text-gray-400">Ultra-realistic 3D product animations for marketing</p>
            </div>
            <div className="text-center">
              <Film className="w-16 h-16 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-bold mb-2">CGI Animations</h3>
              <p className="text-gray-400">Breathtaking CGI animations that bring your ideas to life</p>
            </div>
          </div>
        </div>
      </section>

    {/* About Section */}
<section id="about" className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
    <div className="flex flex-col items-center">
      <div className="md:w-1/2 text-center">
        <p className="text-lg mb-4">
          I'm a passionate video producer specializing in video editing, montages, ultra-realistic product animations, and CGI animations. With years of experience in the industry, I bring creativity and technical expertise to every project.
        </p>
        <p className="text-lg mb-4">
          My goal is to help businesses and individuals bring their visions to life through compelling visual storytelling. Whether it's a product launch, a promotional video, or a creative project, I'm dedicated to delivering high-quality results that exceed expectations.
        </p>
        <a href={freelancerProfileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white py-3 px-8 rounded-full font-bold text-xl hover:bg-blue-700 transition duration-300">
          View My Freelancer Profile
        </a>
      </div>
    </div>
  </div>
</section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href={freelancerProfileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300">
              <User className="w-6 h-6 mr-2" />
              Hire me on Freelancer.com
            </a>
            <a href="mailto: Yokyheikal@outlook.com" className="flex items-center text-blue-400 hover:text-blue-300">
              <Mail className="w-6 h-6 mr-2" />
              Contact me via mail
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 Youssef K. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="w-6 h-6" /></a>
              <a href={freelancerProfileUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><ExternalLink className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;