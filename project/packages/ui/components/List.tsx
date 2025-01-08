import React from "react";

interface Pokemon {
  name: string;
  url: string;
}
interface ListProps {
  pokemon: Pokemon[];
  isLoading: boolean;
  error: string | null;
}

export const List: React.FC<ListProps> = ({ pokemon, isLoading, error }) => {
  return (
    <>
      {isLoading && <p>Loading...</p>}
       {error && <p>{error}</p>}
      <div className="pokemon-main-container">
        {pokemon?.map((item: Pokemon, index: number) => (
          <div key={index} className="pokemon-card" tabIndex={0}>
            <p className="pokemon-name">{item?.name}</p>
            <p>{item?.url}</p>
          </div>
        ))}
      </div>
    </>
  );
};
