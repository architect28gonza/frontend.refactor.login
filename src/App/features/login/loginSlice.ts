import { createSlice } from '@reduxjs/toolkit'

const initLogin = {
    "usuario": "",
    "contrasena": ""
}
export const createSliceLogin = createSlice({
    name: "login",
    initialState: initLogin,
    reducers: {
        handlerLogin: (state, action) => {
            state.usuario = action.payload?.usuario;
        }
    }
})

export default createSliceLogin.reducer

export const { handlerLogin } = createSliceLogin.actions