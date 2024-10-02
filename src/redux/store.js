
    import { configureStore } from "@reduxjs/toolkit";
    import { campersReducer } from "../redux/campers/slice";
    import  filtersReducer  from "../redux/filters/slice"; 
    import   favoriteReducer from "./favorite/slice" ;
    import storage from "redux-persist/lib/storage";
    import {
      persistStore,
      persistReducer,
      FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER,
    } from "redux-persist";

    export const persistCampersReduser = persistReducer({
      key: "campersOrder",
      storage,

    })
    export const store = configureStore({
      reducer: {
        campers: campersReducer,
        filters: filtersReducer,
        favorite: favoriteReducer,
      
      },
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
     
    });
    
    export const persistor = persistStore(store);