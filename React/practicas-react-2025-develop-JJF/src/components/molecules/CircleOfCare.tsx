import Icon from "../atoms/Icon";
import Text from "../atoms/Text";

export interface CircleOfCareProps {
  name: string;
  image: string;
}

export default function CircleOfCare({ name, image }: CircleOfCareProps) {
  return (
    <div className="title">
      <Icon name={image} className="img_title" />
      <Text>{name}</Text>
    </div>
  );
}