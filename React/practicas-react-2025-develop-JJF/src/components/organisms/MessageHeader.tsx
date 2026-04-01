import MailMenu from "../molecules/MailMenu";
import SearchBar from "../molecules/SearchBar";

export function MessageHeader({
  onSearch,
  onNewMessage,
  onInbox,
  onSent,
  inboxCount,
  searchValue
}: {
  onSearch: (value: string) => void;
  onNewMessage: () => void;
  onInbox: () => void;
  onSent: () => void;
  inboxCount: number;
  searchValue: string;
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
        inboxCount={inboxCount}
        onNewMessage={onNewMessage}
        onInbox={onInbox}
        onSent={onSent}
      />

      <SearchBar
        value={searchValue}
        onChange={onSearch}
      />
    </div>
  );
}