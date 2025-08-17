import { Row, Col } from "reactstrap";
import SalesOverview from "../../src/components/dashboards/classic/SalesOverview";
import EmailCampaign from "../../src/components/dashboards/classic/EmailCampaign";
import ActiveVisitors from "../../src/components/dashboards/classic/ActiveVisitors";
import Stats from "../../src/components/dashboards/classic/Stats";
import ProjectTable from "../../src/components/dashboards/classic/ProjectTable";
import RecentComments from "../../src/components/dashboards/classic/RecentComments";
import Chat from "../../src/components/dashboards/classic/Chat";

const Classic = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="10">
          <SalesOverview />
        </Col>
      </Row>
      {/*********************Email & Visitor ************************/}
      <Row>
        <Col lg="10" sm="12">
          <EmailCampaign />
        </Col>
        <Col lg="10" sm="12">
          <ActiveVisitors />
        </Col>
      </Row>
      {/********************* Three Column stats ************************/}
      <Stats />
      {/*********************Project Table ************************/}
      <Row>
        <Col lg="10">
          <ProjectTable />
        </Col>
      </Row>
      {/*********************Chat & comment ************************/}
      <Row>
        <Col lg="10" sm="12">
          <RecentComments />
        </Col>
        <Col lg="10" sm="12">
          <Chat />
        </Col>
      </Row>
    </>
  );
};

export default Classic;
