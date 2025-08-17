import { Row, Col } from "reactstrap";
import CryptoTopCards from "../../src/components/dashboards/crypto/CryptoTopCards";
import CryptoChart from "../../src/components/dashboards/crypto/CryptoChart";
import CryptoExchange from "../../src/components/dashboards/crypto/CryptoExchange";
import CryptoOrder from "../../src/components/dashboards/crypto/CryptoOrder";
import CryptoTable from "../../src/components/dashboards/crypto/CryptoTable";
import CryptoTrade from "../../src/components/dashboards/crypto/CryptoTrade";
import CryptoBuySell from "../../src/components/dashboards/crypto/CryptoBuySell";

const Crypto = () => {
  return (
    <>
      {/********************* Crypto Top Cards ************************/}
      <CryptoTopCards />
      {/********************* Crypto Chart ************************/}
      <CryptoChart />
      {/********************* Crypto Exchange & Order ************************/}
      <Row>
        <Col lg="6">
          <CryptoExchange />
        </Col>
        <Col lg="6">
          <CryptoOrder />
        </Col>
      </Row>
      {/********************* Crypto Table ************************/}
      <Row>
        <Col lg="12">
          <CryptoTable />
        </Col>
      </Row>
      {/********************* Crypto Trade & Buy Sell ************************/}
      <Row>
        <Col lg="6">
          <CryptoTrade />
        </Col>
        <Col lg="6">
          <CryptoBuySell />
        </Col>
      </Row>
    </>
  );
};

export default Crypto;
