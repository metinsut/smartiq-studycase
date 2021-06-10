import { HYDRATE } from 'next-redux-wrapper';
import { createSelector } from 'reselect';

const FETCH_POST = 'FETCH_POST';
const FETCH_STATUS = 'FETCH_STATUS';
const ADD_ITEM_TO_BASKET = 'ADD_ITEM_TO_BASKET';

const getDataByArraySelector = state => state.data.server.data;
const getDataByIdSelector = state => state.data.server.dataListById;
const getBasketListSelector = state => state.data.client.basketItems;
const getBasketItemsLenghtSelector = state =>
  state.data.client.basketItems.length
    ? state.data.client.basketItems.length
    : 0;

const getDataDetailById = createSelector(
  getDataByIdSelector,
  (_, did) => did,
  (getData, did) => (getData[did] ? getData[did] : {})
);

const getBasketListTotalPriceSelector = createSelector(
  getBasketListSelector,
  basketList => {
    const totalPrice = basketList.reduce((acc, item) => {
      acc = acc + parseInt(item.sale_price);
      return acc;
    }, 0);
    return totalPrice;
  }
);

const addItemToBasket = item => ({
  type: ADD_ITEM_TO_BASKET,
  payload: item
});

const fetchData = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_STATUS,
        payload: 'loading'
      });
      const response = await fetch(
        'https://run.mocky.io/v3/271801d4-c44e-4dd3-8830-4761072c1427'
      );
      if (!response) {
        dispatch({
          type: FETCH_STATUS,
          payload: 'fail'
        });
        return;
      }
      const result = await response.json();
      dispatch({
        type: FETCH_STATUS,
        payload: 'success'
      });
      dispatch({
        type: FETCH_POST,
        payload: result
      });
    } catch (error) {
      dispatch({
        type: FETCH_STATUS,
        payload: 'failed'
      });
    }
  };
};

const initialState = {
  server: {
    status: '',
    data: [],
    dataListById: {}
  },
  client: {
    status: '',
    data: [],
    dataListById: {},
    basketItems: []
  }
};

const dataReducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case HYDRATE: {
      return {
        ...state,
        server: {
          ...state.server,
          ...payload.data.server
        }
      };
    }
    case FETCH_POST: {
      const dataListById = payload.reduce((acc, data) => {
        acc[data.id] = data;
        return acc;
      }, {});
      return {
        ...state,
        server: {
          ...state.server,
          data: payload,
          dataListById: dataListById
        }
      };
    }
    case FETCH_STATUS:
      return {
        ...state,
        server: {
          ...state.server,
          status: payload
        }
      };

    case ADD_ITEM_TO_BASKET: {
      const newBasketItems = [...state.client.basketItems, payload];
      return {
        ...state,
        client: {
          ...state.client,
          basketItems: newBasketItems
        }
      };
    }
    default:
      return state;
  }
};

export {
  dataReducer,
  fetchData,
  getDataByArraySelector,
  getDataByIdSelector,
  getDataDetailById,
  addItemToBasket,
  getBasketListSelector,
  getBasketItemsLenghtSelector,
  getBasketListTotalPriceSelector
};
