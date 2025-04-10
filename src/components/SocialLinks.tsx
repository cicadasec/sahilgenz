
import React from 'react';
import { Github, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-5 mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.6s' }}>
      <a href="#" className="text-gray-500 hover:text-theme-purple transition-colors duration-300">
        <Twitter size={20} />
      </a>
      <a href="#" className="text-gray-500 hover:text-theme-purple transition-colors duration-300">
        <Facebook size={20} />
      </a>
      <a href="#" className="text-gray-500 hover:text-theme-purple transition-colors duration-300">
        <Instagram size={20} />
      </a>
      <a href="#" className="text-gray-500 hover:text-theme-purple transition-colors duration-300">
        <Linkedin size={20} />
      </a>
      <a href="#" className="text-gray-500 hover:text-theme-purple transition-colors duration-300">
        <Github size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
