import { Card, CardBody } from "reactstrap";
import NoteDetail from "../../../src/components/apps/notes/NoteDetail";
import NoteList from "../../../src/components/apps/notes/NoteList";
import NoteSearch from "../../../src/components/apps/notes/NoteSearch";
import TwoColumn from "../../../src/components/twoColumn/TwoColumn";

const Notes = () => {
  return (
    <>
      <Card>
        <CardBody>
          <TwoColumn
            leftContent={
              <>
                <NoteSearch />
                <NoteList />
              </>
            }
            rightContent={<NoteDetail />}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default Notes;
