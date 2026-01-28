export default async function PeoplePage() {
  let people = [];
  
  try {
    const response = await fetch("https://swapi.info/api/people", {
      cache: 'no-store'
    });
    people = await response.json();
  } catch (error) {
    console.error("Error fetching people:", error);
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-16 px-4 sm:px-8 md:px-16 bg-white dark:bg-black sm:items-start mx-auto">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Star Wars Characters</h1>
          {people.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {people.map((person: any, index: number) => (
                <div 
                  key={index} 
                  className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {person.name}
                  </h2>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Height:</span> {person.height} cm
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Mass:</span> {person.mass} kg
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Hair Color:</span> {person.hair_color}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Skin Color:</span> {person.skin_color}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Eye Color:</span> {person.eye_color}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Birth Year:</span> {person.birth_year}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Gender:</span> {person.gender}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">Loading characters...</p>
          )}
        </div>
      </main>
    </div>
  );
}
