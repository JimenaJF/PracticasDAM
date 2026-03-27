import Icon from "../atoms/Icon";
import Text from "../atoms/Text";

export default function SettingButton({ text }: { text: string }) {
  return (
    <div className="settings">
      <Icon name= "config" className="config" />
      <Text className="sett_letters">{text}</Text>
    </div>
  );
}