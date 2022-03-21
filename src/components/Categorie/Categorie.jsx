import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getProductsCategories from "../../redux/products/productsCategorie/productsCategoriesActions";
const Categorie = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productsCategorieReducer);

  useEffect(() => {
    dispatch(getProductsCategories.getProductsCategories());
  }, []);

  return (
    <>
      {data.map((item) => (
        <span key={item.id}>
          <li style={{ listStyle: "none" }}>
            <Link to={`/category/${item}`}>{item}</Link>
          </li>
        </span>
      ))}
    </>
  );
};

export default Categorie;
