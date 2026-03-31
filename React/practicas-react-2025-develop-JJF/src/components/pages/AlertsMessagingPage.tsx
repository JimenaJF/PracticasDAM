import AlertsMessaging from "../organisms/AlertsMessaging";
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


export default function AlertsMessagingPage() {

  return (
    <div>
        
      <AlertsMessaging text="ALERTS AND MESSAGING" inboxItems={tableItems}  sentItems={[]} onSend={() => {}}  
      />
          
          
    </div>
  );
}