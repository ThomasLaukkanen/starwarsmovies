import { getAllPlanets } from '../lib/planets';

export default async function PlanetsPage() {
  const planets = await getAllPlanets();
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black ">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-16 px-4 sm:px-8 md:px-16 bg-white dark:bg-black sm:items-start mx-auto">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Star Wars Planets</h1>
          {planets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {planets.map((planet: any, index: number) => (
                <div 
                  key={index} 
                  className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {planet.name}
                  </h2>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Climate:</span> {planet.climate}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Terrain:</span> {planet.terrain}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Population:</span> {planet.population === "unknown" ? "Unknown" : parseInt(planet.population).toLocaleString()}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Diameter:</span> {planet.diameter === "unknown" ? "Unknown" : `${parseInt(planet.diameter).toLocaleString()} km`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Rotation Period:</span> {planet.rotation_period === "unknown" ? "Unknown" : `${planet.rotation_period} hours`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Orbital Period:</span> {planet.orbital_period === "unknown" ? "Unknown" : `${planet.orbital_period} days`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Gravity:</span> {planet.gravity}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Surface Water:</span> {planet.surface_water === "unknown" ? "Unknown" : `${planet.surface_water}%`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">Loading planets...</p>
          )}
        </div>
      </main>
    </div>
  );
}
