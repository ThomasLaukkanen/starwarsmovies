import { Film, Character } from '../types';
import { fetchFromAPI, fetchMultiple } from './api';

export async function getAllFilms(): Promise<Film[]> {
  const films = await fetchFromAPI<Film[]>('/films');
  return films || [];
}

export async function getFilmById(id: string): Promise<Film | null> {
  const film = await fetchFromAPI<Film>(`/films/${id}`);
  
  if (film) {
    return film;
  }
  
  const allFilms = await getAllFilms();
  return allFilms.find(f => 
    f.url?.includes(id) || f.episode_id?.toString() === id
  ) || null;
}

export async function getCharactersForFilm(characterUrls: string[]): Promise<Character[]> {
  return fetchMultiple<Character>(characterUrls.slice(0, 10));
}
