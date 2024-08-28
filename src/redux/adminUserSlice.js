import { createSlice } from "@reduxjs/toolkit";


export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        info: null,
        pending: false,
        error: false
    },

    reducers: {
        updateAdminStart: (state)=> {
            state.pending = true
        },
        updateAdminSuccess: (state, action)=> {
            state.info = action.payload
            state.pending = false
        },
        updateAdminError: (state)=> {
            state.error = true
            state.pending = false
        },
        logoutAdmin: (state)=> {
            state.info = null
        }
    }
})

export const { updateAdminStart, updateAdminSuccess, updateAdminError, logoutAdmin } = adminSlice.actions
export default adminSlice.reducer