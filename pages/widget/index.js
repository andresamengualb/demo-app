import React from "react";
import { Row, Col } from "reactstrap";
import BreadCrumbs from "../../src/layouts/breadcrumbs/BreadCrumbs";
import Chat from "../../src/components/widgets/Chat";
import Feeds from "../../src/components/widgets/Feeds";

import ProfileCard from "../../src/components/widgets/ProfileCard";
import WeatherReport from "../../src/components/widgets/WeatherReport";
import CustomerSupport from "../../src/components/widgets/CustomerSupport";
import TaskList from "../../src/components/widgets/TaskList";
import BrowseStats from "../../src/components/widgets/BrowseStats";
import Notifications from "../../src/components/widgets/Notifications";

const Widgets = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col xs="12" lg="4">
          <BrowseStats />
          <ProfileCard />
          <TaskList />
        </Col>
        <Col xs="12" lg="4">
          <Chat />
          <CustomerSupport />
        </Col>
        <Col xs="12" lg="4">
          <Notifications />
          <WeatherReport />
          <Feeds />
        </Col>
      </Row>
    </>
  );
};

export default Widgets;
