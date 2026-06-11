import { IMAGES } from "@/assets/dictionaryImg";
import Avatar from "../atoms/Avatar";
import Checkbox from "../atoms/Checkbox";
import Icon from "../atoms/Icon";
export default function TableItem({
  sender,
  date,
  subject,
  img,
  arrowClass = "arrow_closed",
  isRead = true
}: {
  sender: string;
  date: string;
  subject: string;
  img: keyof typeof IMAGES;
  arrowClass?: string;
  isRead?: boolean;
}) {
  return (
    <>
      <td className="td_check">
        <Checkbox />
      </td>

      <td className="td_sender">

        <span className={isRead ? "circle_read" : "circle_unread"}></span>

        <Avatar name={isRead ? "grey_ellipse" : img} className="ellipse_mail" />

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