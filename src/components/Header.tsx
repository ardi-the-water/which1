import React from 'react';
import { Settings } from 'lucide-react';

interface HeaderProps {
  onAdminClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminClick }) => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/20">
      <div className="container mx-auto px-2 md:px-4 py-4 md:py-6 max-w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Topol Mopol</h1>
              <p className="text-xs md:text-sm text-gray-600">منوی دیجیتال</p>
            </div>
          </div>
          
          <button
            onClick={onAdminClick}
            className="flex items-center space-x-2 space-x-reverse px-2 py-2 md:px-4 md:py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-200 backdrop-blur-sm text-xs md:text-sm"
          >
            <Settings className="w-4 h-4" />
            <span className="font-medium">مدیریت</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;