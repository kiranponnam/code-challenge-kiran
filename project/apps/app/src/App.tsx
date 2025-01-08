import { List } from "ui";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonData,deletePokemon } from "./Redux/Pokeman/PokemanSlice";
import { RootState } from "./Redux/store";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.pokeman);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API_URL);
      if (!response.ok)
        throw new Error(`Failed to fetch: ${response.statusText}`);
      const data = await response.json();
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

  const handleDelete = (index: number) => {
    dispatch(deletePokemon(index));
  };

  return (
    <>
      <h1>Pokemon list:</h1>
      <List
        pokemon={pokemonList?.list || []}
        isLoading={isLoading}
        error={error}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default App;
