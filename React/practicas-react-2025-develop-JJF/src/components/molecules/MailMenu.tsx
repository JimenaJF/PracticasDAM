import Badge from '../atoms/Badge';
import Checkbox from '../atoms/Checkbox';
import Text from '../atoms/Text';

export default function MailMenu({
  labels, 
  inboxCount,
  onNewMessage,
  onInbox,
  onSent,
  view
}: { 
  labels: { newMsg: string; inbox: string; sent: string };
  inboxCount: number;
  onNewMessage: () => void;
  onInbox: () => void;
  onSent: () => void;
  view: "inbox" | "sent" | "new";
}) {
  return (
    <div className="mail_menu">
      
      <div className="btn_check">
        <Checkbox id='check_all'/>
      </div>

      <Text
        className={`sent_msg ${view === "new" ? "new_msg" : ""}`}
        onClick={onNewMessage}
      >
        {labels.newMsg}
      </Text>

     
      <Text
        className={`sent_msg ${view === "inbox" ? "new_msg" : ""}`}
        onClick={onInbox}
      >
        {labels.inbox}
      </Text>

  
      <Badge value={inboxCount} className='ellipse_inbox'/>



      <Text
        className={`sent_msg ${view === "sent" ? "new_msg" : ""}`}
        onClick={onSent}
      >
        {labels.sent}
      </Text>

    </div>
  );
}
