
import { configureStore } from '@reduxjs/toolkit';
import { CharacterSlice } from '../features/Characters/CharacterSlice'
import { EpisodeSlice } from '../features/Episodes/EpisodeSlice';
import { CharactersPerEpisodeSlice } from '../features/CharacterPerEpisode/CharactersPerEpisodeSlice';

export const store = configureStore({
    reducer: {
        character: CharacterSlice.reducer,
        episode: EpisodeSlice.reducer,
        charactersPerEpisode: CharactersPerEpisodeSlice.reducer
    }
})