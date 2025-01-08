import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Pokemon {
    name: string;
    url: string;
}
interface PokemonState {
    list: Pokemon[];
    isLoading: boolean
    error: string | null;
}

const initialState: PokemonState = {
    list: [],
    isLoading:false,
    error: null
}
const pokemonSlice = createSlice({
    name: 'pokemonData',
    initialState,
    reducers: {
        setPokemonData(state, action: PayloadAction<Pokemon[]>) {
            state.list = action.payload;
        },
       
        deletePokemon: (state, action) => {
            state.list = state.list.filter((_, i) =>  i !== action.payload);
            
        },
    },
});
export const {setPokemonData,deletePokemon}= pokemonSlice.actions;
export default pokemonSlice.reducer;