import { createSlice } from '@reduxjs/toolkit'


const initCambioContrasena = {
    "usuario": "",
    "contrasena": "",
    "verificar": ""
}
export const createSliceLogin = createSlice({
    name : "cambio",
    initialState : initCambioContrasena,
    reducers : {
        handleCambioContrasena: (state, action) => {
            console.log(action.payload);        
        }
    }
})

export default createSliceLogin.reducer

export const { handleCambioContrasena } = createSliceLogin.actions