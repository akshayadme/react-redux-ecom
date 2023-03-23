// Action types
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const SET_SHOW_CART = "SET_SHOW_CART";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_PRODUCTS_TO_LIST = "ADD_PRODUCTS_TO_LIST";
export const INCREMENT_CART_PRODUCT = "INCREMENT_CART_PRODUCT";
export const DECREMENT_CART_PRODUCT = "DECREMENT_CART_PRODUCT";
export const UPDATE_ERROR = "UPDATE_ERROR";

// Action creators
export function addProducts(products) {
  return {
    type: ADD_PRODUCTS,
    products,
  };
}

export function removeProduct(product) {
  return {
    type: REMOVE_PRODUCT,
    product,
  };
}

export function editProduct(product) {
  return {
    type: EDIT_PRODUCT,
    product,
  };
}

export function addToCart(product) {
  return {
    type: ADD_CART,
    product,
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_CART,
    product,
  };
}

export function setShowCart(val) {
  return {
    type: SET_SHOW_CART,
    val,
  };
}

export function incrementProductCount(product) {
  return {
    type: INCREMENT_CART_PRODUCT,
    product,
  };
}

export function decrementProductCount(product) {
  return {
    type: DECREMENT_CART_PRODUCT,
    product,
  };
}

export function updateCartError() {
  return {
    type: UPDATE_ERROR,
  };
}
