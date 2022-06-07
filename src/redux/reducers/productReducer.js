import { ActionType } from "../contents/action-type"

// initialState boshlangish bir value gorsatib qoyish garak

const initialState = {
    product: []
}

// reducer function ikki narsa accept atadi as a parameter
// birnichisi state
// ikkinchisi action, berda action ni biza object b=ni ichinda gorsatamiz chtobi action ni ikki galvniy key larini pass atish uchun 

// reducer ni ichina usually switch dan foydalanamiz 
// agar action type SET_PRODUCTS busa butun hammas stateni copy at i payload ni products dagan keya bar


export const productReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionType.SET_PRODUCTS:
            return {...state, products: payload}
        case ActionType.MENS_PRODUCTS:
            return {...state, mensProduct: payload}
        case ActionType.WOMENS_PRODUCTS:
            return {...state, womensProduct: payload}
        case ActionType.ACCESSORY_PRODUCTS:
            return {...state, accessoryProduct: payload}
        default:
            return state
    }
}

export const selectedProductReducer = (state= initialState, {type, payload}) => {
    switch(type) {
        case ActionType.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}