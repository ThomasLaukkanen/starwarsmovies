import Link from 'next/link';
import { Film, Character } from '../../types';
import FilmPageClient from './FilmPageClient';

async function getFilm(id: string): Promise<Film | null> {
  try {
    // Try fetching by ID first, if that fails, fetch all and find by episode_id or URL
    let response = await fetch(`https://swapi.info/api/films/${id}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      // Fallback: fetch all films and find the one matching the ID
      const allFilmsResponse = await fetch('https://swapi.info/api/films', {
        cache: 'no-store'
      });
      if (!allFilmsResponse.ok) return null;
      const allFilms: Film[] = await allFilmsResponse.json();
      const film = allFilms.find(f => 
        f.url?.includes(id) || f.episode_id?.toString() === id
      );
      return film || null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching film:', error);
    return null;
  }
}

async function getCharacters(characterUrls: string[]): Promise<Character[]> {
  const characters: Character[] = [];
  for (const url of characterUrls) {
    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (response.ok) {
        const character = await response.json();
        characters.push(character);
      }
    } catch (error) {
      console.error('Error fetching character:', error);
    }
  }
  return characters;
}

export default async function FilmPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const film = await getFilm(id);
  
  if (!film) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Film not found</h1>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Films
          </Link>
        </main>
      </div>
    );
  }

  const characters = await getCharacters(film.characters.slice(0, 10)); // Limit to first 10 for performance

  return (
    <FilmPageClient film={film} characters={characters} />
  );
}
