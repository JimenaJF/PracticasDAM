import { useNavigate } from 'react-router-dom';
import CardItem from "../molecules/CardItem";

export default function CardsGrid({ cards }: { cards: any[] }) {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <div className="container">
          {cards.map((card, index) => (
            <CardItem
              key={index}
              {...card}
              onClick={() => navigate(card.route)}
            />
          ))}
        </div>
      </main>
      <hr />
    </>
  );
}
