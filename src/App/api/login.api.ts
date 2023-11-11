import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { endpointLogin } from '../url.endpoints';

export const apiLoginSlide = createApi({
  reducerPath: 'apiLogin',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
  }),
  endpoints: (builder) => ({
    getLoginUsuario: builder.mutation({
      query: (usuario) => ({
        url: endpointLogin,
        method: 'POST',
        body: usuario,
      }),
    }),
  }),
});

// Exporta hooks generados por RTK-Query para usar en componentes
export const { useGetLoginUsuarioMutation } = apiLoginSlide;

// Agrega el reducer y el middleware de RTK-Query a la tienda
export const { reducer, middleware } = apiLoginSlide;
