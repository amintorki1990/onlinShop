import axios from "axios";
import { BASE_API } from "../../baseUrl";
import actionTypes from "../actionTypes";

const getProductsCategorieRouts = (category) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_ROUT_START });
      const { data } = await axios.get(
        `${BASE_API}/products/categorie/${category}`
      );
      dispatch({ type: actionTypes.GET_ROUT_SUCCESS, payload: data });
    } catch (e) {
      console.log(e);
      dispatch({ type: actionTypes.GET_ROUT_FAILURE, payload: e });
    }
  };
};

export default {
  getProductsCategorieRouts,
};
