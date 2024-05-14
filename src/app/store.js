import { configureStore } from '@reduxjs/toolkit';
import  {CharacterSlide } from '../features/tasks/taskSlice'

export const store = configureStore({
    reducer: {
        character: CharacterSlide.reducer
    }
})