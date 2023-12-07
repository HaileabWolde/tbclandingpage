// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

// const clientsApi = createApi({
//   reducerPath: "tbcClientsApi",
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
//   endpoints: (builder) => ({
//     getTbcServices: builder.query({
//         query: () => ({
//             url: `/clients`,
//         }),
//     }),
//   }),
// });

// export const {
//     // useGetTbcServicesQuery
//     useGetTbcServicesQuery
// } = clientsApi;


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { ministryUrl } from "../constants";


export const clientsApi = createApi({
 reducerPath: "clientsApi",
 baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
 endpoints: (builder) => ({ 
   getAllClients: builder.mutation({
     query: () => ({
       url: `/clients`,
     }),
   }),
 }),
});


export const {
 useGetAllClientsMutation,
} = clientsApi;