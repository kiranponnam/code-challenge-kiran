import { List } from 'ui';
import { useEffect, useState } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";
interface Pokemon {
  name: string;
  url: string;
}
const App = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

   const fetchData = async () => {
    try {
      setLoading(true);
      setError(null); 
      const response = await fetch(API_URL);
      if (!response.ok)
        throw new Error(`Failed to fetch: ${response.statusText}`);
      const data = await response.json();
      setPokemonList(data)
      dispatch(setPokemonData(data.results));
    } catch (error: any) {
      setError(error.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
  <>
    <h1>Pokemon list:</h1>
   <List
        pokemon={pokemonList?.list || []}
        isLoading={isLoading}
        error={error}
      />
  </>
  )
}

export default App
