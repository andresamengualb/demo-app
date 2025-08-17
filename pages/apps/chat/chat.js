import { Card, CardBody } from "reactstrap";
import ChatList from "../../../src/components/apps/chat/ChatList";
import ChatSearch from "../../../src/components/apps/chat/ChatSearch";
import ChatContent from "../../../src/components/apps/chat/ChatContent";
import ChatMsgForm from "../../../src/components/apps/chat/ChatMsgForm";
import TwoColumn from "../../../src/components/twoColumn/TwoColumn";

const Chat = () => {
  return (
    <Card>
      <CardBody>
        <TwoColumn
          leftContent={
            <>
              <ChatSearch />
              <ChatList />
            </>
          }
          rightContent={
            <>
              <ChatContent />
              <ChatMsgForm />
            </>
          }
        />
      </CardBody>
    </Card>
  );
};

export default Chat;
