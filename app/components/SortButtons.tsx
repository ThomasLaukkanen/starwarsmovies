'use client';

type SortOption = 'episode' | 'release' | 'title';

interface SortButtonsProps {
  sortBy: SortOption;
  onSortChange: (option: SortOption) => void;
}

export default function SortButtons({ sortBy, onSortChange }: SortButtonsProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
      <div className="flex gap-2">
        <button
          onClick={() => onSortChange('episode')}
          className={`px-4 py-2 text-sm rounded-lg transition-colors cursor-pointer ${
            sortBy === 'episode'
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          Episode
        </button>
        <button
          onClick={() => onSortChange('release')}
          className={`px-4 py-2 text-sm rounded-lg transition-colors cursor-pointer ${
            sortBy === 'release'
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          Release Date
        </button>
        <button
          onClick={() => onSortChange('title')}
          className={`px-4 py-2 text-sm rounded-lg transition-colors cursor-pointer ${
            sortBy === 'title'
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          Title
        </button>
      </div>
    </div>
  );
}
