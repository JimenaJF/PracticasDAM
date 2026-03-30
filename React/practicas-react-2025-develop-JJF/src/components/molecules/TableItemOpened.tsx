import ButtonMail from "../atoms/ButtonMail";
export default function TableItemOpened({
  subject,
  body
}: {
  subject: string;
  body: string;
}) {
  return (
  
      <td colSpan={5} className="opened_mail">
        <h1>{subject}</h1>
        <p>{body}</p>
        <ButtonMail value="DELETE" className="btn_delete" onClick={() => alert("Mail deleted")} />
        <ButtonMail value="REPLY" className="btn_reply" onClick={() => alert("Replying to mail")} />

      </td>

  );
}