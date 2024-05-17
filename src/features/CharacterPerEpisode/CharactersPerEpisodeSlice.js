import { createSlice } from "@reduxjs/toolkit";
import { GetCharactersPerEpisodeThunk } from "./CharactersPerEpisodeThunk";


export const CharactersPerEpisodeSlice = createSlice({
    name: 'charactersPerEpisode',
    initialState: {
        status: 'idle',
        data: [{name:''}],
        error: null
    },
    reducers: {
        addCharactersPerEpisode: (state, action) => {
            state.data.push(action.payload)
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(GetCharactersPerEpisodeThunk.pending, (state, action) => {
            state.status = 'pending'
        })
        
        .addCase(GetCharactersPerEpisodeThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.data = (action.payload)
        })

        .addCase(GetCharactersPerEpisodeThunk.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = ''
        })
        
    }
})


export const { addCharactersPerEpisode } = CharactersPerEpisodeSlice.actions