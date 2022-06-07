import { Action } from "history"
import { ActionType } from "../contents/action-type"
// import action types from an action-type.js 


// define a function that will be called inside dispatch with passed in value of data from api

// it means scan all of the data from an api, find action type of SET_PRODUCTS

export const setProduct = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProducts = () => {
    return {
        type: ActionType.REMOVE_SELECTED_PRODUCT
    }
}

export const mensProducts = (product) => {
    return {
        type: ActionType.MENS_PRODUCTS,
        payload: product
    }
}

export const womensProducts = (product) => {
    return {
        type: ActionType.WOMENS_PRODUCTS,
        payload: product
    }
}

export const accessoryProducts = (product) => {
    return {
        type: ActionType.ACCESSORY_PRODUCTS,
        payload: product
    }
}