import { Card, CardBody } from "reactstrap";
import TwoColumn from "../../../src/components/twoColumn/TwoColumn";
import ShopListing from "../../../src/components/apps/ecommerce/ShopListing";
import EcoSidebar from "../../../src/components/apps/ecommerce/EcoSidebar";

const Shop = () => {
  return (
    <Card>
      <CardBody>
        <TwoColumn
          rightContent={<ShopListing />}
          leftContent={<EcoSidebar />}
        />
      </CardBody>
    </Card>
  );
};

export default Shop;
