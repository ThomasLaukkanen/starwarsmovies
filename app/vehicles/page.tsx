export default async function VehiclesPage() {
  let vehicles = [];
  
  try {
    const response = await fetch("https://swapi.info/api/vehicles", {
      cache: 'no-store'
    });
    vehicles = await response.json();
  } catch (error) {
    console.error("Error fetching vehicles:", error);
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-16 px-4 sm:px-8 md:px-16 bg-white dark:bg-black sm:items-start mx-auto">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Star Wars Vehicles</h1>
          {vehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vehicles.map((vehicle: any, index: number) => (
                <div 
                  key={index} 
                  className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {vehicle.name}
                  </h2>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Model:</span> {vehicle.model}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Manufacturer:</span> {vehicle.manufacturer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Cost:</span> {vehicle.cost_in_credits === "unknown" ? "Unknown" : `${parseInt(vehicle.cost_in_credits).toLocaleString()} credits`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Length:</span> {vehicle.length === "unknown" ? "Unknown" : `${vehicle.length} m`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Max Speed:</span> {vehicle.max_atmosphering_speed === "unknown" ? "Unknown" : `${vehicle.max_atmosphering_speed} km/h`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Crew:</span> {vehicle.crew}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Passengers:</span> {vehicle.passengers}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Cargo Capacity:</span> {vehicle.cargo_capacity === "unknown" ? "Unknown" : `${parseInt(vehicle.cargo_capacity).toLocaleString()} kg`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Vehicle Class:</span> {vehicle.vehicle_class}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">Loading vehicles...</p>
          )}
        </div>
      </main>
    </div>
  );
}
