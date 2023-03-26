import { createAction } from "@reduxjs/toolkit";

export interface IProductAction{
    name: string;
    addPrice: number;
    salePrice: number;
    amount: number;
}
export interface ISaleProductAction{
    name: string;
    amount: number;
}
export interface IDeleteProductAction{
    name: string;
    amount: number;
    addPrice: number;
    id: number;
}

export const createProductAction = createAction<IProductAction>("CREATE_PRODUCT");
export const deleteProductAction = createAction<IDeleteProductAction>("DELETE_PRODUCT");
export const saleProductAction = createAction<ISaleProductAction>("DSALE_PRODUCT");