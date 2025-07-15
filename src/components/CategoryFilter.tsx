import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect
}) => {
  return (
    <div className="mb-8">
      {/* Desktop View */}
      <div className="hidden md:flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => onCategorySelect(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === null
              ? 'bg-topol-500 text-white shadow-lg'
              : 'glass-card text-gray-700 hover:bg-topol-50'
          }`}
        >
          همه
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-topol-500 text-white shadow-lg'
                : 'glass-card text-gray-700 hover:bg-topol-50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Mobile Carousel View */}
      <div className="md:hidden">
        <div className="overflow-x-auto scrollbar-hide w-full">
          <div className="flex gap-3 px-2 pb-2" style={{ minWidth: 'max-content' }}>
            <button
              onClick={() => onCategorySelect(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                selectedCategory === null
                  ? 'bg-topol-500 text-white shadow-lg'
                  : 'glass-card text-gray-700 hover:bg-topol-50'
              }`}
            >
              همه
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category.id
                    ? 'bg-topol-500 text-white shadow-lg'
                    : 'glass-card text-gray-700 hover:bg-topol-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;