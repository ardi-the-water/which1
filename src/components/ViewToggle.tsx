import React from 'react';
import { Grid, List } from 'lucide-react';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, onViewModeChange }) => {
  return (
    <div className="flex items-center justify-center mb-6 px-4 md:px-0">
      <div className="glass-card rounded-lg p-1">
        <button
          onClick={() => onViewModeChange('grid')}
          className={`p-3 rounded-md transition-all duration-200 ${
            viewMode === 'grid'
              ? 'bg-topol-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-white/50'
          }`}
        >
          <Grid className="w-5 h-5 md:w-4 md:h-4" />
        </button>
        <button
          onClick={() => onViewModeChange('list')}
          className={`p-3 rounded-md transition-all duration-200 ${
            viewMode === 'list'
              ? 'bg-topol-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-white/50'
          }`}
        >
          <List className="w-5 h-5 md:w-4 md:h-4" />
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;