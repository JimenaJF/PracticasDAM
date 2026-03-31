import { useState } from "react";
import ButtonMail from "../atoms/ButtonMail";
import Text from "../atoms/Text";

export default function NewMessageForm({
  onSend,
  onCancel
}: {
  onSend: (msg: any) => void;
  onCancel: () => void;
}) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="new_message_container">

      <div className="new_msg_row">
        <Text>Email</Text>
        <input
          type="email"
          placeholder="example@outlook.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="new_msg_row">
        <Text>Subject</Text>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="new_msg_row">
        <Text>Content</Text>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
        />
      </div>

      <div className="buttons" style={{ display: "flex", gap: "20px" }}>
        <ButtonMail
          value="Send"
          className="btn_reply"
          onClick={() =>
            onSend({ email, subject, content, date: new Date().toLocaleDateString() })
          }
        />

        <ButtonMail
          value="Cancel"
          className="btn_delete"
          onClick={onCancel}
        />
      </div>
    </div>
  );
}