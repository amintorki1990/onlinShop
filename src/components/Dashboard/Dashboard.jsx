import { Table } from "antd";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { data } = useSelector((state) => state.productsReducer);
  const dataSource = data;

  const columns = [
    {
      title: "image",
      dataIndex: "image",
      render: (image) => <img src={image} width={40} height={45} />,
    },
    {
      title: "category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "price ",
      dataIndex: "price",
      key: "price",
    },
  ];
  return <Table dataSource={data} columns={columns} />;
};

export default Dashboard;
