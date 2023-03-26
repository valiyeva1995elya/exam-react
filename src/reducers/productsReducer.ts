import {
  createProductAction,
  deleteProductAction,
  saleProductAction
} from "./../actions/productsActions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  product: [
    {
      id: Math.round(Math.random() * 100),
      name: "Молоко",
      addPrice: 500,
      salePrice: 1000,
      amount: 5,
    },
    {
      id: Math.round(Math.random() * 100),
      name: "Сыр",
      addPrice: 2500,
      salePrice: 4000,
      amount: 8,
    },
  ],
  totalSum: 500000,
  histiryList: [""]
};


export const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createProductAction, (state, action) => {
        if(state.product.find(item => item.name.toLowerCase() === action.payload.name.toLowerCase())){
            state.product = state.product.map((item) => item.name.toLowerCase() === action.payload.name.toLowerCase()? {
                id: item.id,
                name: item.name,
                addPrice: action.payload.addPrice,
                salePrice: action.payload.salePrice,
                amount: item.amount + action.payload.amount,
              }
              : item
              )
        } else {

          state.product.push({
            ...action.payload,
            id: Math.round(Math.random() * 100),
          })
        }
        alert("Товар добавлен!")
      state.totalSum = state.totalSum - (action.payload.amount * action.payload.addPrice)
      state.histiryList.push(`В ${new Date().toLocaleTimeString()} - добавлен новый товар "${action.payload.name}", в количестве ${action.payload.amount} шт., закупочная цена: ${action.payload.addPrice} тг., цена продажи: ${action.payload.salePrice} тг.`)
      
      
    })
    .addCase(deleteProductAction, (state, action) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload.id
      );
      state.histiryList.push(`В ${new Date().toLocaleTimeString()} - удален товар "${action.payload.name}", в количестве ${action.payload.amount} шт.`)
      state.totalSum = state.totalSum + (action.payload.amount * action.payload.addPrice)
      
    })
    .addCase(saleProductAction, (state, action) => {
      state.product.map((item) => {
        if(item.name.toLowerCase() === action.payload.name.toLowerCase()){
          if(item.amount < action.payload.amount){
            alert(`Товара "${action.payload.name}" в количестве ${action.payload.amount} шт. нет`)
          }else{
            item.amount = item.amount - action.payload.amount
            state.totalSum = state.totalSum + (action.payload.amount * item.salePrice)
            alert(`"${item.name}" продан в количестве ${action.payload.amount} шт.`)
            state.histiryList.push(`В ${new Date().toLocaleTimeString()} - продан товар "${action.payload.name}", в количестве ${action.payload.amount} шт., цена продажи за ед.: ${item.salePrice} тг.`)
          }
        }
      });
    });
});
