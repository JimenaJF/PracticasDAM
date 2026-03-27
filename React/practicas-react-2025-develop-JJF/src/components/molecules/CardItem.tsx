import Badge from "../atoms/Badge";
import CardTitle from "../atoms/CardTitle";
import Icon from "../atoms/Icon";

export default function CardItem({ totalPoints, rectangle, layerTop, icon, badge, titleText, layerBottom }: 
  { totalPoints?: string; rectangle: string; layerTop: string; icon: string; badge?: number; titleText: React.ReactNode; layerBottom: string; }) {
  return (
    <div className="rectangle">

      <Icon name= {rectangle} className="img_rectangle" />

      <div className="card">

        <Icon name={layerTop} className="layer" />
        <Icon name={icon} className="img_item" />

        {badge && <Badge value={badge} className="circle_test" />}

        <CardTitle>{titleText}</CardTitle>

        <Icon name={layerBottom} className="layer_bottom" />
       
        {totalPoints && (
          <div className="total_points">{totalPoints}</div>
        )}

      </div>
    </div>
  );
}

