import { Card, CardBody } from "reactstrap";
import ThreeColumn from "../../../src/components/threeColumn/ThreeColumn";
import EmailList from "../../../src/components/apps/email/EmailList";
import EmailFilter from "../../../src/components/apps/email/EmailFilter";
import EmailSearch from "../../../src/components/apps/email/EmailSearch";
import EmailDetails from "../../../src/components/apps/email/EmailDetails";

const Email = () => {
  return (
    <Card>
      <CardBody>
        <ThreeColumn
          leftContent={<EmailFilter />}
          middleContent={
            <>
              <EmailSearch />
              <EmailList />
            </>
          }
          rightContent={<EmailDetails />}
        />
      </CardBody>
    </Card>
  );
};

export default Email;
