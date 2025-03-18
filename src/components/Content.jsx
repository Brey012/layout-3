import Slider from "./Slider";
import "../css/Content.css";

const Content = () => {
  return (
    <div className="container-content">
      <Slider />
      <div className="content">
        <div className="first">1</div>
        <div className="second">
          <div className="">2</div>
          <div className="">3</div>
        </div>
        <div className="third">
          <div className="">4</div>
          <div className="">5</div>
          <div className="">6</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
