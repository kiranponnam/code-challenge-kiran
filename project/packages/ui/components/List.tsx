import React from "react";

interface Pokemon {
  name: string;
  url: string;
}
interface ListProps {
  pokemon: Pokemon[];
  isLoading: boolean;
  error: string | null;
  handleDelete:(id:number)=>void;
}

export const List: React.FC<ListProps> = ({ pokemon, isLoading, error,handleDelete }) => {
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="pokemon-main-container">
        {pokemon?.map((item: Pokemon, index: number) => (
          <div key={index} className="pokemon-card" tabIndex={0}>
            <p className="pokemon-name">{item?.name}</p>
            <p>{item?.url}</p>
            <button
              className="pokemon-button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
