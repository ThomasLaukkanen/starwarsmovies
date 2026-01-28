'use client';

import Link from 'next/link';
import { useMovieContext } from '../context/MovieContext';
import { Character } from '../types';

export default function CharactersPage() {
  const { getAllCharacters } = useMovieContext();
  const characters = getAllCharacters();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black ">
      <main className="flex min-h-screen w-full max-w-6xl flex-col py-16 px-4 sm:px-8 md:px-16 bg-white dark:bg-black sm:items-start mx-auto">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Star Wars Characters</h1>
          {characters.length > 0 ? (
            <>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Showing {characters.length} character{characters.length !== 1 ? 's' : ''} from movies you've viewed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {characters.map((character: Character) => {
                  const characterId = character.url.split('/').filter(Boolean).pop();
                  return (
                    <Link
                      key={character.url}
                      href={`/characters/${characterId}`}
                      className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow"
                    >
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {character.name}
                      </h2>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Height:</span> {character.height} cm
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Mass:</span> {character.mass} kg
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Gender:</span> {character.gender}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Birth Year:</span> {character.birth_year}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                No characters yet
              </p>
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                Start exploring movies to see their characters here!
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Browse Films
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
