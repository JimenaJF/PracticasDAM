import CardsGrid from '../organisms/CardsGrid';
import { CircleOfCareOrganisms } from '../organisms/CircleOfCareOrgannisms';
import { RemindersCalendar } from '../organisms/RemindersCalendar';
//import 'styles/Home.css';


const cards= [

  { rectangle: "rectangle_1", 
    badge: 2, 
    layerTop: "layer_2", 
    icon: "warnings_off2", 
    titleText: "ALERTS AND MESSAGING", 
    layerBottom: "layer_3",
    route: "/alerts-messaging"
  },
  { rectangle: "rectangle_1",
    layerTop: "layer_2",
    icon: "reminders_calendar",
    titleText: "REMINDERS CALENDAR",
    badge:1,
    layerBottom: "layer_3",
    route: "/reminders-calendar"
  },
  { rectangle: "rectangle_1",
    layerTop: "layer_2",
    icon: "ties2",
    titleText: (
      <>
        CIRCLE <br /> OF CARE
      </>
    ),

    badge: 2,
    layerBottom: "layer_3",
    route: "/circle-of-care"
  },
  {
    rectangle: "rectangle_1",
    layerTop: "layer_2",
    icon: "daily_care_o_gram",
    titleText: "DAILY CARE-O-GRAM",
    badge: 1,
    layerBottom: "layer_3",
    route: "/daily-care-o-gram"
  },
  {
    rectangle: "rectangle_1",
    layerTop: "layer_2",
    icon: "casemanager",
    titleText: "REPOSITORY",
    layerBottom: "layer_3",
    route: "/repository"
  },
  {
    rectangle: "rectangle_1",
    layerTop: "layer_2",
    icon: "my_health_reports",
    titleText: "REPORTS",
    layerBottom: "layer_3",
    route: "/reports"
  },
  {
    rectangle: "rectangle_1",
    layerTop: "layer_2",
    icon: "reward_points",
    titleText: "MY POINTS",
    layerBottom: "layer_3",
    totalPoints: "Total Points 725",
    route: "/my-points"
  }

 
];

const tableItems = [
  { 
    type: "normal",
    sender: "John Snow", 
    date: "12 April 2014",
    subject: "Hi Friend!!",
    img: "ellipse_1"
  },

  { 
    type: "opened",
    subject: "Hi Friend!!",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique orci sed ipsum maximus sollicitudin. Phasellus sed porta neque. Morbi at convallis risus. Aliquam et lorem venenatis, sodales eros sit amet, lobortis risus. Proin ac condimentum ipsum. Vestibulum vestibulum fermentum venenatis. Quisque sodales velit erat, eu scelerisque nisi feugiat ac. Nulla congue tellus vel nunc euismod interdum. Nulla eget mattis est, et lacinia velit. Cras aliquam eu diam non laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ornare erat nec lacus sagittis porttitor. Vivamus sodales nisi et nunc suscipit, imperdiet tristique est iaculis. Quisque vitae massa in sem pretium venenatis."
  },

  { 
    type: "normal",
    sender: "Richard Channing",
    date: "12 April 2014",
    subject: "Memorial Clinic",
    img: "grey_ellipse"
  },
  { 
    type: "normal",
    sender: "Elisabeth Bale",
    date: "21 June 2013",
    subject: "From Connecticut",
    img: "grey_ellipse"
  },
  { 
    type: "normal",
    sender: "Sarah Connor",
    date: "20 June 2013",
    subject: "Cyberdyne Systems",
    img: "grey_ellipse"
  },
  { 
    type: "normal",
    sender: "Arturo González",
    date: "20 June 2013",
    subject: "Recordatorio Consulta",
    img: "grey_ellipse"
  },

  {
    type: "previous",
    id: "span3",
    col1: null,
    col2: null,
    col3: "5 Previously Messages"
  },
  {
    type: "previous2",
    id: "span2",
    col1: null,
    col2: "5 Previously Messages"
  }
];

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

const circleCards = [
  {
    name: "Francis Fisher Williams",
    role: "Graphic Designer",
    image: "francis",
    color: "red",
    sendMessage: "Send Message"
  },
  {
    name: "Marie Kraft Smith",
    role: "Doctor",
    image: "marie",
    color: "blue",
    sendMessage: "Send Message"
  },
  {
    name: "Dolores Vidal Taylor",
    role: "Comercial",
    image: "dolores",
    color: "red",
    sendMessage: "Send Message"
  },
  {
    name: "Robbie Walker Jr.",
    role: "CEO NY Memorial",
    image: "robbie",
    color: "red",
    sendMessage: "Send Message"
  },
  {
    name: "Vanessa Herrera Simons",
    role: "Nurse",
    image: "vanessa",
    color: "blue",
    sendMessage: "Send Message"
  },
];



export default function Home() {

  return (
    <>
      <CardsGrid cards={cards} />

      <section>
        <RemindersCalendar
          text="REMINDERS CALENDAR"
          data={reminderData}
        />
      </section>

      <section>
        <CircleOfCareOrganisms 
          nameCircleOfCare='CIRCLE OF CARE'
          imgCircle='ties2'
          pending={1} 
          cards={circleCards} 
          textCircleBody="For organize Drag & Drop in the groups"
          textNav1="FIND"
          textNav2="MY CIRCLE OF CARE"
          textNav3="PENDING" 
        />
      </section>
    </>
  );
}
