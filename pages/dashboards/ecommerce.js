import { Row, Col } from "reactstrap";
import Earnings from "../../src/components/dashboards/ecommerce/Earnings";
import Overview from "../../src/components/dashboards/ecommerce/Overview";
import ProductSales from "../../src/components/dashboards/ecommerce/ProductSales";
import ProductTable from "../../src/components/dashboards/ecommerce/ProductTable";
import OrderStats from "../../src/components/dashboards/ecommerce/OrderStats";
import Reviews from "../../src/components/dashboards/ecommerce/Reviews";

const Ecommerce = () => {
  return (
    <>
      {/********************* Earnings & Overview ************************/}
      <Row>
        <Col sm="12" lg="4">
          <Earnings />
        </Col>
        <Col sm="12" lg="8">
          <Overview />
        </Col>
      </Row>
      {/********************* Product Sale Table ************************/}
      <ProductSales />
      {/********************* Product table & Order Stats ************************/}
      <Row>
        <Col sm="12" lg="8">
          <ProductTable />
        </Col>
        <Col sm="12" lg="4">
          <OrderStats />
        </Col>
      </Row>
      {/********************* Review ************************/}
      <Reviews />
    </>
  );
};

export default Ecommerce;
