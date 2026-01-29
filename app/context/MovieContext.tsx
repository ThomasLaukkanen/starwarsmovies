'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Character } from '../types';

interface MovieContextType {
  viewedMovies: string[];
  charactersByMovie: Record<string, Character[]>;
  addViewedMovie: (movieUrl: string, characters: Character[]) => void;
  getAllCharacters: () => Character[];
  clearAll: () => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export function MovieProvider({ children }: { children: ReactNode }) {
  const [viewedMovies, setViewedMovies] = useState<string[]>([]);
  const [charactersByMovie, setCharactersByMovie] = useState<Record<string, Character[]>>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('starwars-viewed-movies');
      const storedCharacters = localStorage.getItem('starwars-characters');
      
      if (stored) {
        setViewedMovies(JSON.parse(stored));
      }
      if (storedCharacters) {
        setCharactersByMovie(JSON.parse(storedCharacters));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('starwars-viewed-movies', JSON.stringify(viewedMovies));
      localStorage.setItem('starwars-characters', JSON.stringify(charactersByMovie));
    }
  }, [viewedMovies, charactersByMovie]);

  const addViewedMovie = (movieUrl: string, characters: Character[]) => {
    if (!viewedMovies.includes(movieUrl)) {
      setViewedMovies(prev => [...prev, movieUrl]);
      setCharactersByMovie(prev => ({
        ...prev,
        [movieUrl]: characters
      }));
    }
  };

  const getAllCharacters = (): Character[] => {
    const allCharacters: Character[] = [];
    const characterMap = new Map<string, Character>();

    Object.values(charactersByMovie).forEach(characters => {
      characters.forEach(character => {
        if (!characterMap.has(character.url)) {
          characterMap.set(character.url, character);
        }
      });
    });

    return Array.from(characterMap.values());
  };

  const clearAll = () => {
    setViewedMovies([]);
    setCharactersByMovie({});
    if (typeof window !== 'undefined') {
      localStorage.removeItem('starwars-viewed-movies');
      localStorage.removeItem('starwars-characters');
    }
  };

  return (
    <MovieContext.Provider value={{ viewedMovies, charactersByMovie, addViewedMovie, getAllCharacters, clearAll }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
}
