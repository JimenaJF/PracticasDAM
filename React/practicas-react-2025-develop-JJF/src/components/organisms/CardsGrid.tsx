import CardItem from "../molecules/CardItem";

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

export default function CardsGrid() {

  
 return (
    <>
    <main>    
      <div className="container">

        {cards.map((card, index) => (
          <CardItem key={index} {...card} />
        ))}

      </div>
    </main>      
      <hr />
    </>
  );

}

