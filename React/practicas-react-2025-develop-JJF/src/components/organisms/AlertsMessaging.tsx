import React from "react";
import AlertsMessagingMolecules from "../molecules/AlertsMessagingMolecules";
import NewMessageForm from "../molecules/NewMessageForm";
import TableItem from "../molecules/TableItem";
import TableItemOpened from "../molecules/TableItemOpened";
import { MessageHeader } from "./MessageHeader";

export default function AlertsMessaging({
  text,
  view,
  inboxItems,
  sentItems,
  openedIndex,
  onOpenMessage,
  onReplyMessage,
  onDeleteMessage,
  onSend,
  onSearch,  
  onNewMessage,
  onInbox,
  onSent,
  replyTo,
  searchValue
}: {
  text: string;
  view: "inbox" | "sent" | "new";
  inboxItems: any[];
  sentItems: any[];
  openedIndex: number | null;
  onOpenMessage: (index: number) => void;
  onReplyMessage: (msg: any) => void;
  onDeleteMessage: (index: number) => void;
  onSend: (msg: any) => void;
  onSearch: (value: string) => void;
  onNewMessage: () => void;
  onInbox: () => void;
  onSent: () => void;
  replyTo: {
    email: string;
    subject: string;
  } | null;
  searchValue: string;
}) {

  return (
    <>
      <AlertsMessagingMolecules text={text} />

      <div className="alerts_messaging">
        <div className="container_messages">

          
        

          <MessageHeader
            onSearch={onSearch}
            onNewMessage={onNewMessage}
            onInbox={onInbox}
            onSent={onSent}
            inboxCount={inboxItems.length}
            searchValue={searchValue}
                    
            />

          {view === "inbox" && (
            <table className="table_mail">
              <tbody>
                {inboxItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr
                      className="tr_mail"
                      onClick={() => onOpenMessage(index)}
                    >
                      <TableItem {...item} />
                    </tr>

                    {openedIndex === index && item.body && (
                      <tr className="tr_mail">
                        <TableItemOpened
                          subject={item.subject}
                          body={item.body}
                          onReply={() => onReplyMessage(item)}
                          onDelete={() => onDeleteMessage(index)}
                        />
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          )}

          {view === "sent" && (
            <table className="table_mail">
              <tbody>
                
                {sentItems.map((item, index) => (
                        <React.Fragment key={index}>
                          <tr
                            className="tr_mail"
                            onClick={() => onOpenMessage(index)}
                            style={{ cursor: "pointer" }}
                          >
                            <TableItem {...item} />
                          </tr>

                          {openedIndex === index && item.body && (
                            <tr className="tr_mail">
                              <TableItemOpened
                                subject={item.subject}
                                body={item.body}
                                onReply={() => onReplyMessage(item)}
                                onDelete={() => onDeleteMessage(index)}
                              />
                            </tr>
                        )}
                        </React.Fragment>
                      ))}

              </tbody>
            </table>
          )}

          {view === "new" && (
            <NewMessageForm
              onSend={onSend}
              onCancel={onInbox}
              initialEmail={replyTo?.email || ""}
              initialSubject={replyTo?.subject || ""}
            />
          )}

        </div>
      </div>
    </>
  );
}