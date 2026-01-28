'use client';

import Link from 'next/link';
import { Film, Character } from '../../types';
import { useMovieContext } from '../../context/MovieContext';
import { useEffect } from 'react';

export default function FilmPageClient({ film, characters }: { film: Film; characters: Character[] }) {
  const { addViewedMovie } = useMovieContext();

  useEffect(() => {
    addViewedMovie(film.url, characters);
  }, [film.url, characters, addViewedMovie]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col py-16 px-4 sm:px-8 md:px-16 bg-white dark:bg-black mx-auto">
        <Link 
          href="/" 
          className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block"
        >
          ← Back to Films
        </Link>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {film.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <span>Episode {film.episode_id}</span>
            <span>•</span>
            <span>Released: {film.release_date}</span>
            <span>•</span>
            <span>Director: {film.director}</span>
            <span>•</span>
            <span>Producer: {film.producer}</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Opening Crawl</h2>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
              {film.opening_crawl}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Characters</h2>
          {characters.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {characters.map((character) => {
                const characterId = character.url.split('/').filter(Boolean).pop();
                return (
                  <Link
                    key={character.url}
                    href={`/characters/${characterId}`}
                    className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {character.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {character.gender} • {character.birth_year}
                    </p>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No characters found</p>
          )}
        </div>
      </main>
    </div>
  );
}
