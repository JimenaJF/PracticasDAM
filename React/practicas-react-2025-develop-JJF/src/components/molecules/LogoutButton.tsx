import Icon from "../atoms/Icon";
import Text from "../atoms/Text";

export default function LogoutButton({ text }: { text: string }) {

  return (
    <div className="logout">
      <Icon name= "img_1419365876_on_off" className="on_off" />
      <Text className="log_letters">{text}</Text>
    </div>
  );
}
