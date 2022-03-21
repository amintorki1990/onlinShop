import "./ProductsCard.scss";
import { Button, Card, Space, message } from "antd";
import { useDispatch } from "react-redux";
import actionTypes from "../../redux/actionTypes";
import { useSelector } from "react-redux";

const { Meta } = Card;

const productsCard = ({ item, showAdd = true }) => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    (state) => state.productsBasketReducer.selectedProducts
  );

  const addProducts = () => {
    message.success("This is a success message");

    const foundedProducts = selectedProducts.find(
      (product) => product.id === item.id
    );

    if (foundedProducts) {
      foundedProducts.amount++;
      dispatch({ type: actionTypes.UPDATED_AMOUNT, payload: foundedProducts });
    } else {
      dispatch({
        type: actionTypes.ADD_TO_CARD,
        payload: { ...item, amount: 1 },
      });
    }
  };
  return (
    <div className="root">
      <Card
        key={item.id}
        hoverable
        style={{ backgroundColor: "#eee", borderRadius: 5 }}
        cover={<img alt="example" src={item.image} width="100" height="280" />}
        actions={
          showAdd && [
            <Button type="primary" onClick={addProducts}>
              Add To Card
            </Button>,
          ]
        }
      >
        <Meta title={item.title} description={`${item.price}$`} />
      </Card>
    </div>
  );
};

export default productsCard;
