import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-8 glass-effect border-t border-white/20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          طراحی و اجرا توسط{' '}
          <a 
            href="https://mykh.ir/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-topol-600 hover:text-topol-700 font-medium transition-colors duration-200 hover:underline"
          >
            علی خداکرمی
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;