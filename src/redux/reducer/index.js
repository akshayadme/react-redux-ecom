import { combineReducers } from "redux";
import {
  ADD_PRODUCTS,
  REMOVE_PRODUCT,
  EDIT_PRODUCT,
  ADD_CART,
  REMOVE_CART,
} from "../action";

const initialProductState = {
  products: [],
  showCart: false,
};
export function handleCart(state = initialProductState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      const productExist = state.products.find(
        (el) => el.title === action.product.title
      );

      if (productExist) {
        return {
          ...state,
          products: action.products,
        };
      } else {
        return {
          ...state,
          products: [...state.products, action.products],
        };
      }

    case EDIT_PRODUCT:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case REMOVE_PRODUCT:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );

      return {
        ...state,
        favourites: filteredArray,
      };

    default:
      return state;
  }
}

const initialCartState = { cart: [], showSearchResults: false };

export function handleCart(state = initialCartState, action) {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };

    case REMOVE_CART:
      return {
        ...state,
        showSearchResults: false,
      };

    default:
      return state;
  }
}

export default combineReducers({ movies, search });
