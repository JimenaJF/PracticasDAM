import Badge from "../atoms/Badge";
import Icon from "../atoms/Icon";

export default function NotificationDot({ value }: { value: number }) {
  return (
    <div className="ellipse">
      <Icon name="ellipse_1" />
      <Badge value={value} className="ellipse_badge"/>
    </div>
  );
}
