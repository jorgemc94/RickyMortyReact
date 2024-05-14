
import { configureStore } from '@reduxjs/toolkit';
import { CharacterSlice } from '../features/CharacterSlice/CharacterSlice'
import { EpisodeSlice } from '../features/EpisodeSlice/EpisodeSlice';

export const store = configureStore({
    reducer: {
        character: CharacterSlice.reducer,
        episode: EpisodeSlice.reducer
    }
})