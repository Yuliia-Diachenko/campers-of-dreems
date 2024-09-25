import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

const initialState = {

   "items": [
    {
      "id": "",
      "name": "",
      "price": 0,
      "rating": 0,
      "location": "",
      "description": "",
      "form": "",
      "length": "",
      "width": "",
      "height": "",
      "tank": "",
      "consumption": "",
      "transmission": "",
      "engine": "",
      "AC": true,
      "bathroom": true,
      "kitchen": false,
      "TV": true,
      "radio": true,
      "refrigerator": false,
      "microwave": true,
      "gas": false,
      "water": true,
      "gallery": [
        {
          "thumb": "https://ftp.goit.study/img/campers-test-task/1-1.webp",
          "original": "https://ftp.goit.study/img/campers-test-task/1-1.webp"
        },
        {
          "thumb": "https://ftp.goit.study/img/campers-test-task/1-2.webp",
          "original": "https://ftp.goit.study/img/campers-test-task/1-2.webp"
        },
        {
          "thumb": "https://ftp.goit.study/img/campers-test-task/1-3.webp",
          "original": "https://ftp.goit.study/img/campers-test-task/1-3.webp"
        }
      ],
      "reviews": [
        {
          "reviewer_name": "Alice",
          "reviewer_rating": 5,
          "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
        },
        {
          "reviewer_name": "Bob",
          "reviewer_rating": 4,
          "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
        }
      ]
    },
],
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