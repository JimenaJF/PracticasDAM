import { IMAGES } from "@/assets/dictionaryImg";
import Avatar from "../atoms/Avatar";
import Checkbox from "../atoms/Checkbox";
import Icon from "../atoms/Icon";
export default function TableItem({
  sender,
  date,
  subject,
  img,
  arrowClass = "arrow_closed"
}: {
  sender: string;
  date: string;
  subject: string;
  img: keyof typeof IMAGES;
  arrowClass?: string;
}) {
  return (
    <>
      <td className="td_check">
        <Checkbox />
      </td>

      <td className="td_sender">
        <Avatar name={img } className="ellipse_mail" />
        {sender}
      </td>

      <td className="td_subject">{subject}</td>

      <td className="td_date">{date}</td>

      <td className="td_arrow">
        <Icon name="mail_arrow" className={arrowClass} />
      </td>
    </>
  );
}