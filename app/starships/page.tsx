import { getAllStarships } from '../lib/starships';

export default async function StarshipsPage() {
  const starships = await getAllStarships();
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-16 px-4 sm:px-8 md:px-16 bg-white dark:bg-black sm:items-start mx-auto">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Star Wars Starships</h1>
          {starships.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {starships.map((starship: any, index: number) => (
                <div 
                  key={index} 
                  className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {starship.name}
                  </h2>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Model:</span> {starship.model}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Manufacturer:</span> {starship.manufacturer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Cost:</span> {starship.cost_in_credits === "unknown" ? "Unknown" : `${parseInt(starship.cost_in_credits).toLocaleString()} credits`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Length:</span> {starship.length === "unknown" ? "Unknown" : `${starship.length} m`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Max Speed:</span> {starship.max_atmosphering_speed === "unknown" ? "Unknown" : `${starship.max_atmosphering_speed} km/h`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Crew:</span> {starship.crew}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Passengers:</span> {starship.passengers}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Cargo Capacity:</span> {starship.cargo_capacity === "unknown" ? "Unknown" : `${parseInt(starship.cargo_capacity).toLocaleString()} kg`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Hyperdrive Rating:</span> {starship.hyperdrive_rating}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">MGLT:</span> {starship.MGLT === "unknown" ? "Unknown" : starship.MGLT}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Starship Class:</span> {starship.starship_class}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">Loading starships...</p>
          )}
        </div>
      </main>
    </div>
  );
}
