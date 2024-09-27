import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

const initialState = {
    campers: {
        items: [] 
      },
    filters: {
        status: "all",
      },
    };

const rootReducer = (state = initialState) => {
    return state;
  };
  
  export const store = configureStore({
    reducer: rootReducer,
  });

  export const persistor = persistStore(store);