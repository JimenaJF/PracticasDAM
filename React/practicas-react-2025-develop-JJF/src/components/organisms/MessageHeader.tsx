import MailMenu from "../molecules/mailMenu";
import SearchBar from "../molecules/SearchBar";

export function MessageHeader({ title }: { title: string }) {
  const labels = {
    newMsg: "New message",
    inbox: "Inbox",
    sent: "Sent",
  };

  return (
    <div className="header_messages">
      <MailMenu labels={labels} inboxCount={2} />
      <SearchBar search={title} />
    </div>
  );
}