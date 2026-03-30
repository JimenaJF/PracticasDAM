import Badge from '../atoms/Badge';
import Checkbox from '../atoms/Checkbox';
import Text from '../atoms/Text';

export default function MailMenu({
  labels, 
  inboxCount 
}: { 
  labels: { newMsg: string; inbox: string; sent: string };
  inboxCount: number;
}) {
  return (
    <div className="mail_menu">
      
      <div className="btn_check">
        <Checkbox />
      </div>

      <Text className="new_msg">{labels.newMsg}</Text>

      <Text className="inbox">{labels.inbox}</Text>

      <div className="ellipse_inbox">
        <Badge value={inboxCount} />
      </div>

      <Text className="sent_msg">{labels.sent}</Text>
    </div>
  );
}
