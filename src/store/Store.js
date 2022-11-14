import { perfilSlice } from "./Reducers";
import { configureStore } from "@reduxjs/toolkit";


export default configureStore({
    reducer: {
        perfil: perfilSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
})
