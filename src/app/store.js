import { configureStore } from '@reduxjs/toolkit';
import { CharacterSlice } from '../features/tasks/taskSlice'

export const store = configureStore({
    reducer: {
        character: CharacterSlice.reducer
    }
})