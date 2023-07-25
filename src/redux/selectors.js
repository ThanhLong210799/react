import { createSelector } from "@reduxjs/toolkit";

export const productSelector = (state) => state.product;

//Chọn lại product đã lưa trong store
export const productRemainingSelector = createSelector( 
  productSelector,
  (product) => {
    return product;
  }
);
