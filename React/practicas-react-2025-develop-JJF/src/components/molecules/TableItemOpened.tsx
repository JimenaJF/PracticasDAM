import ButtonMail from "../atoms/ButtonMail";
export default function TableItemOpened({
  subject,
  body,
  onReply,
  onDelete
}: {
  subject: string;
  body: string;
  onReply: () => void;
  onDelete: () => void;
}) {
  return (
  
      <td colSpan={5} className="opened_mail">
        <h1>{subject}</h1>
        <p>{body}</p>
        <ButtonMail value="DELETE" className="btn_delete" onClick={onDelete} />
        <ButtonMail value="REPLY" className="btn_reply" onClick={onReply} />

      </td>

  );
}