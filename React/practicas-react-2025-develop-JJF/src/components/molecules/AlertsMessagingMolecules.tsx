import Icon from "../atoms/Icon";
import Text from "../atoms/Text";


export default function AlertsMessagingMolecules({text}: {text: string}) {
  return (
    <div className="title">
      <Icon name="warnings_off2" className="img_title" />
      <Text>{text}</Text>
    </div>
  );
}