import Header from "./components/Header";
import Content from "./components/Content";
import "./css/Layout.css";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
};

export default Layout;
