import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import BarIcons from "./BarIcons";


export default function ReminderCalendarMolec({text}: {text: string}) {
  return (
    <>
      <Icon name="reminders_calendar" className="img_title" />
      <Text>{text}</Text>
      <Icon name="titular_barra" className="bar" />
      <BarIcons />

    </>
  );
}