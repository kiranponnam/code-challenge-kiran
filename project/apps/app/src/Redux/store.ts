import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './Pokeman/PokemanSlice';

export const store = configureStore({
  reducer: {
    pokeman: pokemonReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;