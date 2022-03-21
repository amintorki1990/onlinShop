import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import getProductsCategorieRouts from "../../redux/productCategorieRout/productCategorieRoutActions";

const ProductCategorie = () => {
  const { productCategory } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productsCategorieRoutReducer);
  console.log(data);
  useEffect(() => {
    dispatch(
      getProductsCategorieRouts.getProductsCategorieRouts(productCategory)
    );
  }, [productCategory]);

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>{item.id}</div>
      ))}
    </>
  );
};

export default ProductCategorie;
