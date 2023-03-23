import {
  ADD_PRODUCTS,
  REMOVE_PRODUCT,
  EDIT_PRODUCT,
  ADD_CART,
  REMOVE_CART,
  INCREMENT_CART_PRODUCT,
  DECREMENT_CART_PRODUCT,
  UPDATE_ERROR,
} from "../action";

// initial product state

const initialProductState = {
  products: [],
  cart: [],
  cartCount: 0,
  cartError: false,
};

// reducer function to perform all product and cart related operation
export default function handleEcomProducts(
  state = initialProductState,
  action
) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };

    case EDIT_PRODUCT:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case REMOVE_PRODUCT:
      const filteredProducts = state.favourites.filter(
        (product) => product.title !== action.product.title
      );

      return {
        ...state,
        products: filteredProducts,
      };

    case ADD_CART:
      const productExist = state.cart.find((el) => el.id === action.product.id);

      if (productExist) {
        const products = state.cart.map((el) =>
          el.id === action.product.id
            ? {
                ...el,
                qty: (productExist.qty += 1),
                totalPrice: productExist.price * productExist.qty,
              }
            : el
        );

        return {
          ...state,
          cart: [...products],
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { ...action.product, qty: 1, totalPrice: action.product.price },
          ],
          cartCount: (state.cartCount += 1),
        };
      }
      break;

    case REMOVE_CART:
      const filteredCart = state.cart.filter(
        (el) => el.title !== action.product.title
      );

      return {
        ...state,
        cart: filteredCart,
        cartCount: (state.cartCount -= 1),
      };

    case INCREMENT_CART_PRODUCT:
      const productFoundInc = state.cart.find(
        (el) => el.id === action.product.id
      );

      if (productFoundInc.qty === 5) {
        return {
          ...state,
          cartError: true,
        };
      } else {
        const products = state.cart.map((el) =>
          el.id === action.product.id
            ? {
                ...el,
                qty: (productFoundInc.qty += 1),
                totalPrice: productFoundInc.price * productFoundInc.qty,
              }
            : el
        );

        return {
          ...state,
          cart: [...products],
        };
      }

    case DECREMENT_CART_PRODUCT:
      const productFoundDec = state.cart.find(
        (el) => el.id === action.product.id
      );

      if (productFoundDec.qty === 1) {
        return {
          ...state,
          cartError: true,
        };
      } else {
        const products = state.cart.map((el) =>
          el.id === action.product.id
            ? {
                ...el,
                qty: (productFoundDec.qty -= 1),
                totalPrice: productFoundDec.price * productFoundDec.qty,
              }
            : el
        );

        return {
          ...state,
          cart: [...products],
        };
      }

    case UPDATE_ERROR:
      return {
        ...state,
        cartError: false,
      };

    default:
      return state;
  }
}
