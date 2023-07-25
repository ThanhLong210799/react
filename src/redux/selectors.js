import { createSelector } from "@reduxjs/toolkit";

export const productSelector = (state) => state.product;

//reselect
export const productRemainingSelector = createSelector( 
  productSelector,
  (product) => {
    return product;
  }
);
