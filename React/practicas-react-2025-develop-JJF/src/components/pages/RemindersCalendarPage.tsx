import { RemindersCalendar } from "../organisms/RemindersCalendar";

const reminderData = {
  today: {
    title: "TODAY",
    date: "2 JULY / MONDAY",
  },
  doctor: {
    name: "Call Dr. Smith",
    phone: "675 557 89",
  },
  test: {
    title: "Ocular Test",
    location: "Memorial Clinic Miami",
    date: "2 JULY 2012",
    time: "14:30",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique orci sed ipsum maximus sollicitudin. Phasellus sed porta neque. Morbi at convallis risus. Aliquam et lorem venenatis, sodales eros sit amet, lobortis risus. Proin ac condimentum ipsum. Vestibulum vestibulum fermentum venenatis. Quisque sodales velit erat, eu scelerisque nisi feugiat ac. Nulla congue tellus vel nunc euismod interdum.",
  },
  calendar: {
    currentDay: 2,
    markedDays: [6,16 , 27],
    month: "JULY 2014",
    headers: ["S", "M", "T", "W", "T", "F", "S"],
    weeks: [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, "", "", "", ""],
    ],
  },
};

export default function RemindersCalendarPage() {

  return(
    <>
     
      <RemindersCalendar text="REMINDERS CALENDAR" data={reminderData} />
    </>
  );
}