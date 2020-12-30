import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchase: false,
};

const purchaseInit = (state, action) => {
    return updatedObject(state, { purchased: false });
}

const purchaseBurgerStart = (state, action) => {
    return updatedObject(state, { loading: false });
}

const purchaseBurgerSucess = (state, action) => {
    const newOrder = updatedObject(action.orderData, { id: action.orederId });
      return updatedObject(state, {
        loading: false,
        purchase: true,
        orders: state.orders.concat(newOrder),
      });
}

const purchaseBurgerFail = (state, action) => {
    return updatedObject(state, { loading: false });
}

const fetchOrderStart = (state, action) => {
    return updatedObject(state, { loading: true });
}

const fetchOrderSucess = (state, action) => {
    return updatedObject(state, {
        orders: action.orders,
        loading: false,
      });
}

const fetchOrderFail = (state, action) => {
    return updatedObject(state, { loading: false });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);     
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSucess(state, action);      
    case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);    
    case actionTypes.FETCH_ORDER_START: return fetchOrderStart(state, action);      
    case actionTypes.FETCH_ORDER_SUCESS: return fetchOrderSucess(state, action);      
    case actionTypes.FETCH_ORDER_FAIL: return fetchOrderFail(state, action);
     
    default:
      return state;
  }
};

export default reducer;
