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
  onOpenMessage: (index: number | null) => void;
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

  const [readIndexes, setReadIndexes] = React.useState<Set<number>>(new Set());

  const handleOpenMessage = (index: number) => {
    setReadIndexes(prev => new Set(prev).add(index));
    onOpenMessage(openedIndex === index ? null : index);
  };

  const [visibleCount, setVisibleCount] = React.useState(5); 

  const INITIAL_COUNT = 0; 

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 5); 
  };

  const handleCollapse = () => {
    setVisibleCount(INITIAL_COUNT);
  };
  const visibleItems = inboxItems.slice(0, visibleCount); 
  const hiddenCount = inboxItems.length - visibleCount; 
  const isExpanded = visibleCount > INITIAL_COUNT; // Sabe si está expandido


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
            view={view}  

            />

          {view === "inbox" && (
            <>
            {inboxItems.length === 0 ? (
            <div className="empty_inbox">
              <p>No messages in your inbox</p>
            </div>
          ) : (
            <table className="table_mail">
              <tbody>
                {visibleItems.map((item, index) => ( 
                    <React.Fragment key={index}>
                    <tr
                      className="tr_mail"
                      onClick={() => handleOpenMessage(index)}
                    >
                      <TableItem {...item} isRead={readIndexes.has(index)} /> 
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
              
              <tfoot>
                
                
                <tr style={{ cursor: "pointer", height: "35px" }}>
                  <td></td>
                  <td></td>
                  <td></td>
                  {hiddenCount > 0 ? (
                    
                    <td className="previous_msg" onClick={handleLoadMore}>
                      {hiddenCount} Previously Messages 
                    </td>
                  ) : isExpanded ? (
                    <td className="previous_msg" onClick={handleCollapse}>
                      Show less 
                    </td>
                  ) : null}
                  
                </tr>
                
              </tfoot>
              
            </table>
          )}
            </>
          )}

          {view === "sent" && (
            <table className="table_mail">
              <tbody>
                
                {sentItems.map((item, index) => (
                        <React.Fragment key={index}>
                          <tr
                            className="tr_mail"
                            onClick={() => handleOpenMessage(index)}
                            style={{ cursor: "pointer" }}
                          >
                            <TableItem {...item} isRead={readIndexes.has(index)} />
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