import { useTranslation } from 'react-i18next';
import AlertsMessaging from '../organisms/AlertsMessaging';
import CardsGrid from '../organisms/CardsGrid';
import Header from '../organisms/Header';
import { MessageHeader } from '../organisms/MessageHeader';
import { RemindersCalendar } from '../organisms/RemindersCalendar';
import TableGrid from '../organisms/TableGrid';
//import 'styles/Home.css';

const cards= [

  { rectangle: "rectangle_1", 
    badge: 2, 
    layerTop: "layer_2", 
    icon: "warnings_off2", 
    titleText: "ALERTS AND MESSAGING", 
    layerBottom: "layer_3"},

  { rectangle: "rectangle_1",
    layerTop: "layer_2",
    icon: "reminders_calendar",
    titleText: "REMINDERS CALENDAR",
    badge:1,
    layerBottom: "layer_3"
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
    layerBottom: "layer_3"
  },
  {
    rectangle: "rectangle_1",
    layerTop: "layer_2",
    icon: "daily_care_o_gram",
    titleText: "DAILY CARE-O-GRAM",
    badge: 1,
    layerBottom: "layer_3"
  },
  {
    rectangle: "rectangle_1",
    layerTop: "layer_2",
    icon: "casemanager",
    titleText: "REPOSITORY",
    layerBottom: "layer_3"
  },
  {
    rectangle: "rectangle_1",
    layerTop: "layer_2",
    icon: "my_health_reports",
    titleText: "REPORTS",
    layerBottom: "layer_3"
  },
  {
    rectangle: "rectangle_1",
    layerTop: "layer_2",
    icon: "reward_points",
    titleText: "MY POINTS",
    layerBottom: "layer_3",
    totalPoints: "Total Points 725"
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


export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header
        valueNotification={6}
        clientName="Cordelia Carpenter"
        textValueSettings="SETTINGS"
        textLogoutButton="LOGOUT"
      />

      <CardsGrid cards = {cards} />
      <section>
        <AlertsMessaging text="ALERTS AND MESSAGING" />
        
        <div className="alerts_messaging">
          <div className="container_messages">
          
            <MessageHeader title="Search" />

            <table className="table_mail">
            <TableGrid items = {tableItems}/>
            </table>

       
          </div>
        </div>
        
      </section>
      <section>
      
        <RemindersCalendar text="REMINDERS CALENDAR" />
      </section>
    </>
  );
}
