import { useEffect } from "react";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Skeleton } from "antd";
import productsActions from "../../redux/products/productsActions";
import ProductsCard from "./ProductsCard";
import { Card } from "antd";

const { Meta } = Card;

const ProductsList = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state) => state.productsReducer
  );

  useEffect(() => {
    dispatch(productsActions.getProducts());
  }, []);

  if (loading || !data.length) return <Skeleton />;

  if (error) return <div>Something Went Wrong !!!</div>;
  if (data.length) {
    return (
      <Row justify="center" gutter={16}>
        <SwiperComponent />

        {data.map((item) => (
          <Col
            className="gutter-row"
            span={6}
            key={item.id}
            xs={24}
            md={12}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ProductsCard item={item} />
          </Col>
        ))}
      </Row>
    );
  }
};

export default ProductsList;
