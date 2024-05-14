import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetCharacterThunk = createAsyncThunk('characters/getCharacters', async () => {
    try {
        const request = await fetch('https://rickandmortyapi.com/api/character')
        if (request.ok) {
            const characters = await request.json()
            return characters.results
            
        }

        return false;
    } catch (error) {
        console.log(error)
    }
})