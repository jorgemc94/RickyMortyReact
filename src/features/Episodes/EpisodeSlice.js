
import { createSlice } from "@reduxjs/toolkit";
import { GetEpisodeThunk } from "./EpisodeThunk";


export const EpisodeSlice = createSlice({
    name: 'episode',
    initialState: {
        status: 'idle',
        data: [],
        error: null
    },
    reducers: {
        addEpisode: (state, action) => {
            state.data.push(action.payload)
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(GetEpisodeThunk.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(GetEpisodeThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.data = action.payload
            })
            .addCase(GetEpisodeThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = ''
            });
    }
})


export const { addEpisode } = EpisodeSlice.actions