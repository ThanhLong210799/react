import { createSelector } from "@reduxjs/toolkit";

export const productSelector = (state) => state.product;

//Select the product you've saved in the store
export const productRemainingSelector = createSelector( 
  productSelector,
  (product) => {
    return product;
  }
);
