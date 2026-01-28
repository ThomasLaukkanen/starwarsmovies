export default async function SpeciesPage() {
  let species = [];
  
  try {
    const response = await fetch("https://swapi.info/api/species", {
      cache: 'no-store'
    });
    species = await response.json();
  } catch (error) {
    console.error("Error fetching species:", error);
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-16 px-4 sm:px-8 md:px-16 bg-white dark:bg-black sm:items-start mx-auto">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Star Wars Species</h1>
          {species.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {species.map((specie: any, index: number) => (
                <div 
                  key={index} 
                  className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {specie.name}
                  </h2>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Classification:</span> {specie.classification}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Designation:</span> {specie.designation}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Average Height:</span> {specie.average_height === "unknown" ? "Unknown" : `${specie.average_height} cm`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Average Lifespan:</span> {specie.average_lifespan === "unknown" ? "Unknown" : specie.average_lifespan}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Hair Colors:</span> {specie.hair_colors}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Skin Colors:</span> {specie.skin_colors}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Eye Colors:</span> {specie.eye_colors}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Language:</span> {specie.language}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">Loading species...</p>
          )}
        </div>
      </main>
    </div>
  );
}
