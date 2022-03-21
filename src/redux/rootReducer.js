import { combineReducers } from "redux";
import { productsReducer } from "./products/productsReducer";
import { productsBasketReducer } from "./basket/productsBasketReducer";
import { productsCategorieReducer } from "./products/productsCategorie/productsCategorieReducer";
import { productsCategorieRoutReducer } from "./productCategorieRout/productCategorieRoutReducer";
export default combineReducers({
  productsReducer,
  productsBasketReducer,
  productsCategorieReducer,
  productsCategorieRoutReducer,
});
