import Link from 'next/link';
import { Film } from './types';
import Loader from './components/Loader';

export default async function Home() {
  let films: Film[] = [];
  let isLoading = true;
  
  try {
    const response = await fetch("https://swapi.info/api/films", {
      cache: 'no-store'
    });
    films = await response.json();
    isLoading = false;
  } catch (error) {
    console.error("Error fetching films:", error);
    isLoading = false;
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-16 px-4 sm:px-8 md:px-16 bg-white dark:bg-black sm:items-start mx-auto">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Star Wars Films</h1>
          {isLoading ? (
            <Loader />
          ) : films.length > 0 ? (
            <div className="space-y-4">
              {films.map((film) => {
                // Use episode_id as the route parameter
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
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No films found</p>
          )}
        </div>
      </main>
    </div>
  );
}
