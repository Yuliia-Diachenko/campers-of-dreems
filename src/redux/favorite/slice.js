// Початковий стан слайса
const initialState = {
    favorite: [],
    isFavorite: false,
  };
  
  export default function favoriteReducer(state = initialState, action) {
    switch (action.type) {
      case 'favorite/setFavorite':
        return {
          ...state,
          status: action.payload,
        };
  
      default:
        return state;
    }
  };
  