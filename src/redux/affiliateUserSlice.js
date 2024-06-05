import { createSlice } from "@reduxjs/toolkit";


export const affiliateUserSlice = createSlice({
    name: 'affiliateUser',
    initialState: {
        info: null,
        pending: false,
        error: false
    },

    reducers: {
        updateStart: (state)=> {
            state.pending = true
        },
        updateSuccess: (state, action)=> {
            state.info = action.payload
            state.pending = false
        },
        updateError: (state)=> {
            state.error = true
            state.pending = false
        },
        logoutUser: (state)=> {
            state.info = null
        }
    }
})

export const { updateStart, updateSuccess, updateError, logoutUser } = affiliateUserSlice.actions
export default affiliateUserSlice.reducer