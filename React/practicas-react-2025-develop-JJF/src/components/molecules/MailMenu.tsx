import Badge from '../atoms/Badge';
import Checkbox from '../atoms/Checkbox';
import Text from '../atoms/Text';

export default function MailMenu({
  labels, 
  inboxCount,
  onNewMessage,
  onInbox,
  onSent
}: { 
  labels: { newMsg: string; inbox: string; sent: string };
  inboxCount: number;
  onNewMessage: () => void;
  onInbox: () => void;
  onSent: () => void;
}) {
  return (
    <div className="mail_menu">
      
      <div className="btn_check">
        <Checkbox id='check_all'/>
      </div>

      <Text className="new_msg" onClick={onNewMessage}>
        {labels.newMsg}
      </Text>

      <Text className="inbox" onClick={onInbox}>
        {labels.inbox}
      </Text>

      <div className="ellipse_inbox">
        <Badge value={inboxCount} />
      </div>

      <Text className="sent_msg" onClick={onSent}>
        {labels.sent}
      </Text>
    </div>
  );
}
