import { Row, Col } from "reactstrap";
import SalesOverview from "../../src/components/dashboards/classic/SalesOverview";
import EmailCampaign from "../../src/components/dashboards/classic/EmailCampaign";
import ActiveVisitors from "../../src/components/dashboards/classic/ActiveVisitors";
import Stats from "../../src/components/dashboards/classic/Stats";
import ProjectTable from "../../src/components/dashboards/classic/ProjectTable";
import RecentComments from "../../src/components/dashboards/classic/RecentComments";
import Chat from "../../src/components/dashboards/classic/Chat";

export default function HomePage() {
  return (
    <>
      <Row>
        <Col lg="10">
          <SalesOverview />
        </Col>
      </Row>
      <Row>
        <Col lg="10" sm="12">
          <EmailCampaign />
        </Col>
        <Col lg="10" sm="12">
          <ActiveVisitors />
        </Col>
      </Row>
      <Stats />
      <Row>
        <Col lg="10">
          <ProjectTable />
        </Col>
      </Row>
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
}
