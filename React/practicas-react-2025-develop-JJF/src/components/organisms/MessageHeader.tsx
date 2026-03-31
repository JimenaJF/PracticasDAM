import MailMenu from "../molecules/MailMenu";
import SearchBar from "../molecules/SearchBar";

export function MessageHeader({
  title,
  onNewMessage,
  onInbox,
  onSent
}: {
  title: string;
  onNewMessage: () => void;
  onInbox: () => void;
  onSent: () => void;
}) {
  const labels = {
    newMsg: "New message",
    inbox: "Inbox",
    sent: "Sent",
  };

  return (
    <div className="header_messages">
      <MailMenu
        labels={labels}
        inboxCount={2}
        onNewMessage={onNewMessage}
        onInbox={onInbox}
        onSent={onSent}
      />
      <SearchBar search={title} />
    </div>
  );
}