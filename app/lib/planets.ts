import { Planet } from '../types';
import { fetchFromAPI } from './api';

export async function getAllPlanets(): Promise<Planet[]> {
  const planets = await fetchFromAPI<Planet[]>('/planets');
  return planets || [];
}

export async function getPlanetById(id: string): Promise<Planet | null> {
  return fetchFromAPI<Planet>(`/planets/${id}`);
}
