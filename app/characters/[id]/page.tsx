import Link from 'next/link';
import { Character } from '../../types';

async function getCharacter(id: string): Promise<Character | null> {
  try {
    const response = await fetch(`https://swapi.info/api/people/${id}`, {
      cache: 'no-store'
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error fetching character:', error);
    return null;
  }
}

export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const character = await getCharacter(id);
  
  if (!character) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black ">
        <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Character not found</h1>
          <Link href="/characters" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Characters
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black ">
      <main className="flex min-h-screen w-full max-w-6xl flex-col py-16 px-4 sm:px-8 md:px-16 bg-white dark:bg-black mx-auto">
        <Link 
          href="/characters" 
          className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block"
        >
          ← Back to Characters
        </Link>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {character.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Physical Attributes</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 font-medium">Height:</span>
                <span className="text-gray-900 dark:text-white">{character.height} cm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 font-medium">Mass:</span>
                <span className="text-gray-900 dark:text-white">{character.mass} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 font-medium">Hair Color:</span>
                <span className="text-gray-900 dark:text-white">{character.hair_color}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 font-medium">Skin Color:</span>
                <span className="text-gray-900 dark:text-white">{character.skin_color}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 font-medium">Eye Color:</span>
                <span className="text-gray-900 dark:text-white">{character.eye_color}</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Personal Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 font-medium">Birth Year:</span>
                <span className="text-gray-900 dark:text-white">{character.birth_year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 font-medium">Gender:</span>
                <span className="text-gray-900 dark:text-white">{character.gender}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
