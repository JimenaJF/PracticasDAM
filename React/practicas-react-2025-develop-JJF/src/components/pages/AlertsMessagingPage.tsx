import { useState } from "react";
import AlertsMessaging from "../organisms/AlertsMessaging";

const tableItems = [
  { 
    type: "normal",
    sender: "John Snow", 
    date: "12 April 2014",
    subject: "Hi Friend!!",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique orci sed ipsum maximus sollicitudin. Phasellus sed porta neque. Morbi at convallis risus. Aliquam et lorem venenatis, sodales eros sit amet, lobortis risus. Proin ac condimentum ipsum. Vestibulum vestibulum fermentum venenatis. Quisque sodales velit erat, eu scelerisque nisi feugiat ac. Nulla congue tellus vel nunc euismod interdum. Nulla eget mattis est, et lacinia velit. Cras aliquam eu diam non laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ornare erat nec lacus sagittis porttitor. Vivamus sodales nisi et nunc suscipit, imperdiet tristique est iaculis. Quisque vitae massa in sem pretium venenatis.",
    img: "ellipse_1"
  },

  { 
    type: "normal",
    sender: "Richard Channing",
    date: "12 April 2014",
    subject: "Memorial Clinic",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique orci sed ipsum maximus sollicitudin. Phasellus sed porta neque. Morbi at convallis risus. Aliquam et lorem venenatis, sodales eros sit amet, lobortis risus. Proin ac condimentum ipsum. Vestibulum vestibulum fermentum venenatis. Quisque sodales velit erat, eu scelerisque nisi feugiat ac. Nulla congue tellus vel nunc euismod interdum. Nulla eget mattis est, et lacinia velit. Cras aliquam eu diam non laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ornare erat nec lacus sagittis porttitor. Vivamus sodales nisi et nunc suscipit, imperdiet tristique est iaculis. Quisque vitae massa in sem pretium venenatis.",
    img: "grey_ellipse"
  },
  { 
    type: "normal",
    sender: "Elisabeth Bale",
    date: "21 June 2013",
    subject: "From Connecticut",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique orci sed ipsum maximus sollicitudin. Phasellus sed porta neque. Morbi at convallis risus. Aliquam et lorem venenatis, sodales eros sit amet, lobortis risus. Proin ac condimentum ipsum. Vestibulum vestibulum fermentum venenatis. Quisque sodales velit erat, eu scelerisque nisi feugiat ac. Nulla congue tellus vel nunc euismod interdum. Nulla eget mattis est, et lacinia velit. Cras aliquam eu diam non laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ornare erat nec lacus sagittis porttitor. Vivamus sodales nisi et nunc suscipit, imperdiet tristique est iaculis. Quisque vitae massa in sem pretium venenatis.",
    img: "grey_ellipse"
  },
  { 
    type: "normal",
    sender: "Sarah Connor",
    date: "20 June 2013",
    subject: "Cyberdyne Systems",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique orci sed ipsum maximus sollicitudin. Phasellus sed porta neque. Morbi at convallis risus. Aliquam et lorem venenatis, sodales eros sit amet, lobortis risus. Proin ac condimentum ipsum. Vestibulum vestibulum fermentum venenatis. Quisque sodales velit erat, eu scelerisque nisi feugiat ac. Nulla congue tellus vel nunc euismod interdum. Nulla eget mattis est, et lacinia velit. Cras aliquam eu diam non laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ornare erat nec lacus sagittis porttitor. Vivamus sodales nisi et nunc suscipit, imperdiet tristique est iaculis. Quisque vitae massa in sem pretium venenatis.",
    img: "grey_ellipse"
  },
  { 
    type: "normal",
    sender: "Arturo González",
    date: "20 June 2013",
    subject: "Recordatorio Consulta ",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique orci sed ipsum maximus sollicitudin. Phasellus sed porta neque. Morbi at convallis risus. Aliquam et lorem venenatis, sodales eros sit amet, lobortis risus. Proin ac condimentum ipsum. Vestibulum vestibulum fermentum venenatis. Quisque sodales velit erat, eu scelerisque nisi feugiat ac. Nulla congue tellus vel nunc euismod interdum. Nulla eget mattis est, et lacinia velit. Cras aliquam eu diam non laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ornare erat nec lacus sagittis porttitor. Vivamus sodales nisi et nunc suscipit, imperdiet tristique est iaculis. Quisque vitae massa in sem pretium venenatis.",
    img: "grey_ellipse"
  },

  
];

export default function AlertsMessagingPage() {

  const [view, setView] = useState<"inbox" | "sent" | "new">("inbox");

  const [inbox, setInbox] = useState(tableItems);
  const [sent, setSent] = useState<any[]>([]);

  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const [replyTo, setReplyTo] = useState<{
    email: string;
    subject: string;
  } | null>(null);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredInbox = inbox.filter(item =>
    item.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSent = sent.filter(item =>
    item.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSend = (msg: any) => {
    const sentMessage = {
      type: "normal",
      sender: msg.email,
      subject: msg.subject || "(No subject)",
      body: msg.content,
      date: new Date().toLocaleDateString(),
      img: "ellipse_1",
    };

    setSent(prev => [sentMessage, ...prev]);
    setView("sent");
    setReplyTo(null);
    setOpenedIndex(null);
    setSearchTerm("");
  };

  const handleDeleteMessage = (index: number) => {
    if (view === "inbox") {
      setInbox(prev => prev.filter((_, i) => i !== index));
    } else {
      setSent(prev => prev.filter((_, i) => i !== index));
    }

    setOpenedIndex(null);
  };

  const handleReplyMessage = (item: any) => {
    setReplyTo({
      email: item.sender,
      subject: `Re: ${item.subject}`,
    });

    setView("new");
    setOpenedIndex(null);
  };

  
  return (
    <AlertsMessaging
      text="ALERTS AND MESSAGING"
      view={view}
      inboxItems={view === "inbox" ? filteredInbox : inbox}
      sentItems={view === "sent" ? filteredSent : sent}
      openedIndex={openedIndex}
      onOpenMessage={setOpenedIndex}
      onReplyMessage={handleReplyMessage}
      onDeleteMessage={handleDeleteMessage}
      onSend={handleSend}
      onSearch={setSearchTerm}
      searchValue={searchTerm}
      onInbox={() => {
        setView("inbox");
        setOpenedIndex(null);
        setSearchTerm("");
      }}
      onSent={() => {
        setView("sent");
        setOpenedIndex(null);
        setSearchTerm("");
      }}
      onNewMessage={() => {
        setView("new");
        setOpenedIndex(null);
      }}
      replyTo={replyTo}
    />
  );
}