import { Vehicle } from '../types';
import { fetchFromAPI } from './api';

export async function getAllVehicles(): Promise<Vehicle[]> {
  const vehicles = await fetchFromAPI<Vehicle[]>('/vehicles');
  return vehicles || [];
}

export async function getVehicleById(id: string): Promise<Vehicle | null> {
  return fetchFromAPI<Vehicle>(`/vehicles/${id}`);
}
