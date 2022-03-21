import axios from "axios";
import { BASE_API } from "../../../baseUrl";
import actionTypes from "../../../redux/actionTypes";
const getProductsCategories = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_CATEGORIE_START });
      const { data } = await axios.get(`${BASE_API}/products/categories`);
      dispatch({ type: actionTypes.GET_CATEGORIE_SUCCESS, payload: data });
    } catch (e) {
      console.log(e);
      dispatch({ type: actionTypes.GET_CATEGORIE_FAILURE, payload: e });
    }
  };
};

export default {
  getProductsCategories,
};
