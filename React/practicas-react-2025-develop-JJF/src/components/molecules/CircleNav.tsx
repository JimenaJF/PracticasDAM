import Badge from "../atoms/Badge";
import Text from "../atoms/Text";

export function CircleNav({ pending,textNav1, textNav2, textNav3 }: { pending: number; textNav1: string; textNav2: string; textNav3: string }) {
  return (
    <div className="circle_nav">
      <Text className="nav_care">{textNav1}</Text>

      <div className="nav_care">
        <Text>{textNav2}</Text>
        <div className="bottom_bar">
        </div>
      </div>

      <div className="nav_care" id="pending">
        <Text>{textNav3}</Text>
        <Badge className="ellipse_pending" value={pending} />
      </div>
    </div>
  );
}