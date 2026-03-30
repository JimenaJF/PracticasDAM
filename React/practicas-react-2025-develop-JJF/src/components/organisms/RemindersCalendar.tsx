
import ReminderCalendarMolec from "../molecules/ReminderCalendarMolec";

export function RemindersCalendar({text}: {text: string}) {
  return (
    <div className="title" >
      <ReminderCalendarMolec text={text} />
    </div>
  );
}