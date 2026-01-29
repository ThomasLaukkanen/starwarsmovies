import { Starship } from '../types';
import { fetchFromAPI } from './api';

export async function getAllStarships(): Promise<Starship[]> {
  const starships = await fetchFromAPI<Starship[]>('/starships');
  return starships || [];
}

export async function getStarshipById(id: string): Promise<Starship | null> {
  return fetchFromAPI<Starship>(`/starships/${id}`);
}
