// Action types
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const SET_SHOW_CART = "SET_SHOW_CART";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_PRODUCTS_TO_LIST = "ADD_PRODUCTS_TO_LIST";

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

export function addCart(product) {
  return {
    type: ADD_CART,
    product,
  };
}

export function removeCart(product) {
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

// export function addProductsToList(product) {
//   return {
//     type: Add_PRODUCTS_TO_LIST,
//     product,
//   };
// }

// export function handleMovieSearch(input) {
//   console.log(input);
//   const url = `http://www.omdbapi.com/?apikey=121631c1&t=${input}`;

//   return async function (dispatch) {
//     const response = await fetch(url);
//     const product = await response.json();
//     console.log(product);

//     dispatch(addProductsSearchResult(product));
//   };
// }

// export function addProductsSearchResult(product) {
//   return {
//     type: Add_SEARCH_RESULT,
//     product,
//   };
// }
