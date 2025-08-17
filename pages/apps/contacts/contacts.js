import { Card, CardBody } from "reactstrap";
import ContactList from "../../../src/components/apps/contact/ContactList";
import ContactSearch from "../../../src/components/apps/contact/ContactSerch";
import ContactDetails from "../../../src/components/apps/contact/ContactDetails";
import ThreeColumn from "../../../src/components/threeColumn/ThreeColumn";
import ContactFilter from "../../../src/components/apps/contact/ContactFilter";

const Contacts = () => {
  return (
    <Card>
      <CardBody>
        <ThreeColumn
          leftContent={<ContactFilter />}
          middleContent={
            <>
              <ContactSearch />
              <ContactList />
            </>
          }
          rightContent={<ContactDetails />}
        />
      </CardBody>
    </Card>
  );
};

export default Contacts;
