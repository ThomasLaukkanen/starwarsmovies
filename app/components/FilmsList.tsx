'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Film } from '../types';
import Loader from './Loader';

type SortOption = 'episode' | 'release' | 'title';

export default function FilmsList({ films, isLoading }: { films: Film[]; isLoading: boolean }) {
  const [sortBy, setSortBy] = useState<SortOption>('episode');

  const sortedFilms = [...films].sort((a, b) => {
    switch (sortBy) {
      case 'episode':
        return a.episode_id - b.episode_id;
      case 'release':
        return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  if (isLoading) {
    return <Loader />;
  }

  if (films.length === 0) {
    return <p className="text-gray-600 dark:text-gray-400">No films found</p>;
  }

  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy('episode')}
            className={`px-4 py-2 text-sm rounded-lg transition-colors cursor-pointer ${
              sortBy === 'episode'
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Episode
          </button>
          <button
            onClick={() => setSortBy('release')}
            className={`px-4 py-2 text-sm rounded-lg transition-colors cursor-pointer ${
              sortBy === 'release'
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Release Date
          </button>
          <button
            onClick={() => setSortBy('title')}
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

      <div className="space-y-4">
        {sortedFilms.map((film) => {
          const filmId = film.url?.split('/').filter(Boolean).pop() || film.episode_id.toString();
          return (
            <Link
              key={film.episode_id}
              href={`/films/${filmId}`}
              className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {film.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Episode {film.episode_id} • Released: {film.release_date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                {film.opening_crawl}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                Director: {film.director} • Producer: {film.producer}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
