import { createAsyncThunk } from "@reduxjs/toolkit";



export const GetCharactersPerEpisodeThunk = createAsyncThunk('episode/getEpisode', async (id) => {
    try {
        const requestEpisode = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
        if (requestEpisode.ok) {
            const episodes = await requestEpisode.json()
            const characterId = episodes.characters.map((character) => character.split('/').pop())
            const requestCharacters = await fetch(`https://rickandmortyapi.com/api/character/${characterId.join(',')}`)
            if (requestCharacters.ok) {
                const characters = await requestCharacters.json()
                return {characters: characters, episodes: episodes}
            }
        }   
    } catch (error) {
        console.log(error)
    }
})

