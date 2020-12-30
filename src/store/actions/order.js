import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
//import order from '../../components/Order/Order';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId : id,
        orderData : orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData, token) => {
    return dispatch =>  {
        dispatch(purchaseBurgerStart());
        axios.post("/orders.json?auth=" + token, orderData)
      .then((responce) => {
          console.log(responce.data);
        dispatch(purchaseBurgerSuccess(responce.data.name, orderData) );
      })
      .catch((error) => {
         dispatch(purchaseBurgerFail(error));
      });
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrderSucess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCESS,
        orders: orders
    }
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDER_FAIL,
        error : error
    }
} 

export const fetchOrderStart = () => {
    return{
        type: actionTypes.FETCH_ORDER_START
    }
}

export const fetchOrders = (token) => {
   return dispatch => {
    axios
    .get("/orders.json?auth=" + token)
    .then((res) => {
      const fetchOrders = [];
      for (let key in res.data) {
        fetchOrders.push({
          ...res.data[key],
          id: key,
        });
      }
      dispatch(fetchOrderSucess(fetchOrders)) 
      // console.log(fetchOrders)
      
    })
    .catch((err) => {
      dispatch(fetchOrdersFail(err));
    });
   }
}