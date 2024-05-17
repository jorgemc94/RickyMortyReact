
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetEpisodeThunk = createAsyncThunk('episode/getEpisode', async () => {
    try {
        const request = await fetch('https://rickandmortyapi.com/api/episode')
        if (request.ok) {
            const episodes = await request.json()
            return episodes.results
            
        }

        return false;
    } catch (error) {
        console.log(error)
    }
})