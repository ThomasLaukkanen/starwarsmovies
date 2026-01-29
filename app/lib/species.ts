import { Species } from '../types';
import { fetchFromAPI } from './api';

export async function getAllSpecies(): Promise<Species[]> {
  const species = await fetchFromAPI<Species[]>('/species');
  return species || [];
}

export async function getSpeciesById(id: string): Promise<Species | null> {
  return fetchFromAPI<Species>(`/species/${id}`);
}
