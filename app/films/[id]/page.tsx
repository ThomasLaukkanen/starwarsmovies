import Link from 'next/link';
import { Character } from '../../types';
import FilmPageClient from './FilmPageClient';
import { getFilmById, getCharactersForFilm } from '../../lib/films';

export default async function FilmPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const film = await getFilmById(id);
  
  if (!film) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Film not found</h1>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Films
          </Link>
        </main>
      </div>
    );
  }

  const characters = await getCharactersForFilm(film.characters);

  return (
    <FilmPageClient film={film} characters={characters} />
  );
}
