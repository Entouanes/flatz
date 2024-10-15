export async function getSuggestions(query: string, token: string) {
    const url = new URL(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`);
    url.searchParams.append('access_token', token);
  
    const response = await fetch(url.toString(), {
      method: 'GET',
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    return data;
}
