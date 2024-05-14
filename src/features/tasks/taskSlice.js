import { createSlice } from "@reduxjs/toolkit";


export const CharacterSlide = createSlice({
    name: 'character',
    initialState: [],
    reducers: {
        addCharacter: (state, action) => {
            state.push(action.payload)
        }
    }
})




export const EpisodeSlide = createSlice({
    name: 'episode',
    initialState: [],
})


export const { addCharacter } = CharacterSlide.actions