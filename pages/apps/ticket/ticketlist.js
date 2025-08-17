import { Card, CardBody } from "reactstrap";
import TicketListing from "../../../src/components/apps/ticket/TicketListing";
import TicketFilter from "../../../src/components/apps/ticket/TicketFilter";

const TicketList = () => {
  return (
    <Card>
      <CardBody>
        <TicketFilter />
        <TicketListing />
      </CardBody>
    </Card>
  );
};

export default TicketList;
