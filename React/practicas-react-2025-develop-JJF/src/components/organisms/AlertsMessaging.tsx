import { useState } from "react";
import AlertsMessagingMolecules from "../molecules/AlertsMessagingMolecules";
import NewMessageForm from "../molecules/NewMessageForm";
import { MessageHeader } from "./MessageHeader";
import TableGrid from "./TableGrid";

export default function AlertsMessaging({
  text,
  inboxItems,
  sentItems,
  onSend
}: {
  text: string;
  inboxItems: any[];
  sentItems: any[];
  onSend: (msg: any) => void;
}) {

  const [view, setView] = useState<"inbox" | "sent" | "new">("inbox");

  return (
    <>
      <AlertsMessagingMolecules text={text} />

      <div className="alerts_messaging">
        <div className="container_messages">

          <MessageHeader
            title="Search"
            onNewMessage={() => setView("new")}
            onInbox={() => setView("inbox")}
            onSent={() => setView("sent")}
          />

          {view === "inbox" && (
            <table className="table_mail">
              <tbody><TableGrid items={inboxItems} /></tbody>
            </table>
          )}

          {view === "sent" && (
            <table className="table_mail">
              <tbody><TableGrid items={sentItems} /></tbody>
            </table>
          )}

          {view === "new" && (
            <NewMessageForm
              onSend={(msg) => {
                onSend(msg);  
                setView("sent");
              }}
              onCancel={() => setView("inbox")}
            />
          )}

        </div>
      </div>
    </>
  );
}