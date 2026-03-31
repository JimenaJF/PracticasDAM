import { CircleOfCareOrganisms } from "../organisms/CircleOfCareOrgannisms";

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
export default function CircleOfCarePage() {
  return (
  <>
    
    <CircleOfCareOrganisms
          nameCircleOfCare='CIRCLE OF CARE'
          imgCircle='ties2'
          pending={1} 
          cards={circleCards} 
          textCircleBody="For organize Drag & Drop in the groups"
          textNav1="FIND"
          textNav2="MY CIRCLE OF CARE"
          textNav3="PENDING" />;
  </>
  );
}