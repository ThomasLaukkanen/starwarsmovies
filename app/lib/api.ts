const API_BASE_URL = 'https://swapi.info/api';

const fetchOptions = {
  cache: 'no-store' as const,
};

export async function fetchFromAPI<T>(endpoint: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, fetchOptions);
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    return null;
  }
}

export async function fetchMultiple<T>(urls: string[]): Promise<T[]> {
  const results: T[] = [];
  
  for (const url of urls) {
    try {
      const response = await fetch(url, fetchOptions);
      if (response.ok) {
        const data = await response.json();
        results.push(data);
      }
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
    }
  }
  
  return results;
}
