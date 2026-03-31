import Icon from "../atoms/Icon";
import Text from "../atoms/Text";

export function CareCard({name, role, image, color, sendMessage }: {name: string; role: string; image: string; color: "red" | "blue"; sendMessage: string}) {
  return (
    <div className="care_square">
      <div className={color === "red" ? "red_bar" : "blue_bar"} />

      <div className="picture">
        <Icon name={image} />
      </div>

      <div className="care_card">
        <div className="name_profession">
          <h1>{name}</h1>
          <p>{role}</p>
          <Text className="send_msg">{sendMessage}</Text>
        </div>
      </div>
    </div>
  );
}
