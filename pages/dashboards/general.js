import { Row, Col } from "reactstrap";
import MonthSummery from "../../src/components/dashboards/general/MonthSummery";
import TotalVisits from "../../src/components/dashboards/general/TotalVisits";
import SalesRatio from "../../src/components/dashboards/general/SalesRatio";
import OrderStatus from "../../src/components/dashboards/general/OrderStatus";
import RevenuePageBounce from "../../src/components/dashboards/general/RevenuePageBounce";
import ProjectTable from "../../src/components/dashboards/classic/ProjectTable";
import RecentComments from "../../src/components/dashboards/classic/RecentComments";
import Chat from "../../src/components/dashboards/classic/Chat";

const General = () => {
  return (
    <>
      {/********************* Month Summery, Total visits & sales ratio, Order Status ************************/}
      <Row>
        <Col sm="12" lg="6">
          <MonthSummery />
        </Col>
        <Col sm="12" lg="6">
          <Row>
            <Col sm="12" lg="6">
              <TotalVisits />
            </Col>
            <Col sm="12" lg="6">
              <SalesRatio />
            </Col>
          </Row>
          <OrderStatus />
        </Col>
      </Row>
      {/********************* Revenue , Page, Bounce ************************/}
      <RevenuePageBounce />
      {/********************* Project Table ************************/}
      <ProjectTable />
      {/*********************Chat & comment ************************/}
      <Row>
        <Col lg="6" sm="12">
          <RecentComments />
        </Col>
        <Col lg="6" sm="12">
          <Chat />
        </Col>
      </Row>
    </>
  );
};

export default General;
