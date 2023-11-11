import { configureStore } from '@reduxjs/toolkit'
import createSliceLogin from '../features/login/loginSlice'
import createSliceCambio from '../features/login/CambioContrasena.Slice'
import { apiLoginSlide } from '../api/login.api'

export const store = configureStore({
    reducer: {
        login: createSliceLogin,
        cambio: createSliceCambio,
        [apiLoginSlide.reducerPath]: apiLoginSlide.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiLoginSlide.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch