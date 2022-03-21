import "./Header.scss";
import { ShoppingCartOutlined, HomeOutlined } from "@ant-design/icons";
import { Badge, Popover, Button } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Categorie from "../Categorie/Categorie";

const Header = () => {
  const selectedProducts = useSelector(
    (state) => state.productsBasketReducer.selectedProducts
  );
  const renderSelectedProducts = () => {
    return selectedProducts.map((item) => (
      <div
        key={item.id}
        style={{
          marginBottom: 8,
          paddingBottom: 4,
          borderBottom: "1px solid #ccc",
        }}
      >
        <span style={{ marginRight: 5 }}>
          <img src={item.image} width={50} height={60} />
        </span>
        <span>{item.title}</span>
        <span style={{ marginLeft: 5 }}>
          {item.amount > 1 ? `Amount = ${item.amount}` : null}
        </span>
      </div>
    ));
  };
  const content = () => {
    return (
      <>
        {renderSelectedProducts()}
        <Link to="/cart">
          <Button type="primary" size="small">
            Buy
          </Button>
        </Link>
      </>
    );
  };

  return (
    <div className="header">
      <span
        style={{ display: "flex", gap: 24, justifyContent: "space-between" }}
      >
        <Categorie />
      </span>
      <div>
        <Popover content={content} title="Selected Products" trigger="click">
          <Badge count={selectedProducts.length} style={{ marginRight: 30 }}>
            <ShoppingCartOutlined
              style={{ fontSize: 30, cursor: "pointer", marginRight: 30 }}
            />
          </Badge>
        </Popover>
        <Link to="/Dashboard">
          <HomeOutlined
            style={{
              fontSize: 25,
              marginTop: 0,
              color: "black",
              marginBottom: 0,
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
