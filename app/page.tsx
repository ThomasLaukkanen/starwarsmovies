import Link from 'next/link';
import { Film } from './types';
import Loader from './components/Loader';
import FilmsList from './components/FilmsList';

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
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black py-16 rounded-2xl">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-16 px-4 sm:px-8 md:px-16 bg-white dark:bg-black sm:items-start mx-auto">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Star Wars Films</h1>
          <FilmsList films={films} isLoading={isLoading} />
        </div>
      </main>
    </div>
  );
}
