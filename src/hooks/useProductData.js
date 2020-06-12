import { useEffect, useReducer } from "react";
import axios from "axios";

// Action constants
const SET_PRODUCT_DATA = "SET_PRODUCT_DATA";

const reducder = (state, action) => {
  const SET_PRODUCT_DATA = ({ value: products }) => ({ ...state, products });

  const DEFAULT = () => {
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  };

  const actions = {
    SET_PRODUCT_DATA,
    DEFAULT,
  };

  return (actions[action.type] || actions.DEFAULT)(action);
};

const useProductData = () => {
  const [state, dispatch] = useReducer(reducder, {
    products: [],
  });

  const getRandomCents = () => {
    return Math.round(Math.random() * 10000);
  };

  // Get "product" data from api
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos", {
        params: {
          _limit: 20,
        },
      })
      .then((res) => {
        const products = res.data.map((product) => ({
          ...product,
          priceCents: getRandomCents(),
        }));

        dispatch({ type: SET_PRODUCT_DATA, value: products });
      });
  }, []);

  return { state };
};

export default useProductData;
