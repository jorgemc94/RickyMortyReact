import { createSlice } from "@reduxjs/toolkit";
import { GetCharacterThunk } from "./CharacterThunk";


export const CharacterSlice = createSlice({
    name: 'character',
    initialState: {
        status: 'idle',
        data: [],
        error: null
    },
    reducers: {
        addCharacter: (state, action) => {
            state.data.push(action.payload)
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(GetCharacterThunk.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(GetCharacterThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.data = action.payload
            })
            .addCase(GetCharacterThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = ''
            });
    }
})


export const { addCharacter, removeCharacter } = CharacterSlice.actions