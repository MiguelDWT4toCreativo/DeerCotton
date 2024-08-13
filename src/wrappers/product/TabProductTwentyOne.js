import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SectionTitleThree from "../../components/section-title/SectionTitleThree";
import ProductGridTwo from "./ProductGridTwo";



// AQUI MODIFIQUE COSAS

const TabProductTwentyOne = ({
  spaceBottomClass,
  category,
  productTabClass,
  bgColorClass
}) => {
  return (
    <div className={clsx("product-area", spaceBottomClass, bgColorClass)}>
      <br></br>
      <br></br>
      <div className="container">
        <SectionTitleThree
          titleText="Productos Destacados"
          positionClass="text-center"
          colorClass="text-white"
        />
        <Tab.Container defaultActiveKey="bestSeller">
          <Nav
            variant="pills"
            className={clsx("product-tab-list pt-35 pb-60 text-center", productTabClass)}
          >
            <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="bestSeller">
              <div className="row">
                <ProductGridTwo
                  category={category}
                  type="bestSeller"
                  limit={20}
                  spaceBottomClass="mb-25"
                  titlePriceClass="title-price-wrap-2-white"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProductTwentyOne.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default TabProductTwentyOne;
