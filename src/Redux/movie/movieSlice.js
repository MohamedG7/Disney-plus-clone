import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    recommanded: null,
    originals: null,
    trendings: null,
    newDisney: null,
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie: ( state, action ) => {
            state.recommanded = action.payload.recommanded;
            state.originals = action.payload.originals;
            state.trendings = action.payload.trendings;
            state.newDisney = action.payload.newDisney;
        },
    }
});

export const {
    setMovie
} = movieSlice.actions

export const selectRecommanded = state => state.movie.recommanded;
export const selectOriginals = state => state.movie.originals;
export const selectTrendings = state => state.movie.trendings;
export const selectNewDisney = state => state.movie.newDisney;


export default movieSlice.reducer