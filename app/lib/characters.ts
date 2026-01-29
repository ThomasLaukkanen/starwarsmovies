import { Character } from '../types';
import { fetchFromAPI } from './api';

export async function getAllCharacters(): Promise<Character[]> {
  const characters = await fetchFromAPI<Character[]>('/people');
  return characters || [];
}

export async function getCharacterById(id: string): Promise<Character | null> {
  return fetchFromAPI<Character>(`/people/${id}`);
}
