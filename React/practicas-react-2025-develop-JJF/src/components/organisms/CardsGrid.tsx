import CardItem from "../molecules/CardItem";



export default function CardsGrid({cards}:{cards: any[]}) {

  
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

