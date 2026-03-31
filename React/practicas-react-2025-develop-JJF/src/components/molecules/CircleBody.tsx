import Text from "../atoms/Text";
import { CareCard } from "./CareCard";

export function CircleBody({ cards , text}: { cards: any[]; text: string }) {
  return (
    <div className="circle_body">
      <Text className="grey_title">
        {text}  
      </Text>

      <div className="cards_container">
        {cards.map((card, i) => (
          <CareCard key={i} {...card} />
        ))}
      </div>
    </div>
  );
}