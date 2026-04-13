import Icon from "../atoms/Icon";
import ReminderCalendarMolec from "../molecules/ReminderCalendarMolec";

export function RemindersCalendar({
  text,
  data,
  onSelectDay,
  onAddEvent,
  onDeleteEvent,
  onEditEvent,
  onUpdateEvent,
  editingEventId,
  onPrevMonth,
  onNextMonth
}: {
  text: string;
  data: any;
  onSelectDay?: (day: number) => void;
  onAddEvent?: () => void;
  onDeleteEvent?: (id: string) => void;
  onEditEvent?: (id: string | null) => void;
  onUpdateEvent?: (id: string, updates: any) => void;
  editingEventId?: string | null;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
}) {

  const { today, calendar, selectedDay, events } = data;

  return (
    <section>
      <div className="title">
        <ReminderCalendarMolec text={text} />
      </div>

      <div className="reminders_calendar">
        <div className="container_calendar">

          {/* PANEL IZQUIERDO */}
          <div className="reminders">
            <div className="date">
              <h1>{today.title}</h1>
              <p>{today.date}</p>
            </div>

            {/* <div className="doctor">
              <div>
                <Icon name="phone" className="img_phone" />
              </div>
              <div className="dr_name">
                <h1>{doctor.name}</h1>
                <p>{doctor.phone}</p>
              </div>
            </div> */}

            <div className="test">

              {(!events || events.length === 0) && (
                <>
                  <p>No events for this day</p>
                  <input
                    type="button"
                    value="ADD EVENT"
                    className="btn_reply"
                    onClick={onAddEvent}
                  />
                </>
              )}

              {events && events.length > 0 && (
                <>
                  {events.map((ev: any) => {
                    const isEditing = editingEventId === ev.id;

                    return (
                      <div key={ev.id}>
                        <div className="header_test">
                          <div>
                            <Icon name="calendar" className="img_calendar" />
                          </div>

                          <div className="test_type">
                            {isEditing ? (
                              <input
                                value={ev.title}
                                onChange={(e) =>
                                  onUpdateEvent?.(ev.id, { title: e.target.value })
                                }
                              />
                            ) : (
                              <h1>{ev.title}</h1>
                            )}
                          </div>

                          <div className="cross">
                            <Icon
                              name="close_cross"
                              onClick={() => onDeleteEvent?.(ev.id)}
                            />
                          </div>
                        </div>

                        <div className="body_test">
                          <div className="test_date">
                            <p>{calendar.month} /</p>
                            {isEditing ? (
                              <input
                                type="time"
                                value={ev.time}
                                onChange={(e) =>
                                  onUpdateEvent?.(ev.id, { time: e.target.value })
                                }
                              />
                            ) : (
                              <h1>{ev.time}</h1>
                            )}
                          </div>

                          {isEditing ? (
                            <textarea
                              value={ev.description}
                              onChange={(e) =>
                                onUpdateEvent?.(ev.id, { description: e.target.value })
                              }
                            />
                          ) : (
                            <div className="test_summary">{ev.description}</div>
                          )}

                          <div className="buttons">
                            {isEditing ? (
                              <input
                                type="button"
                                value="SAVE"
                                className="btn_reply"
                                onClick={() => onEditEvent?.(null)}
                              />
                            ) : (
                              <input
                                type="button"
                                value="CHANGE"
                                className="btn_reply"
                                onClick={() => onEditEvent?.(ev.id)}
                              />
                            )}

                            <input
                              type="button"
                              value="DELETE"
                              className="btn_delete"
                              onClick={() => onDeleteEvent?.(ev.id)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <input
                    type="button"
                    value="ADD EVENT"
                    className="btn_reply"
                    onClick={onAddEvent}
                  />
                </>
              )}

            </div>
          </div>

          {/* calendar */}
          <div className="calendar">
            <div className="nav_calendar">
              <div className="arrow_left" onClick={onPrevMonth}>
                <Icon name="mail_arrow" className="arrow_closed" />
              </div>

              <div className="date">
                <h1>{calendar.month}</h1>
            </div>

              <div className="arrow_right" onClick={onNextMonth}>
                <Icon name="mail_arrow" className="arrow_closed" />
              </div>
            </div>


            <table className="table_calendar">
              <thead>
                <tr>
                  {calendar.headers.map((h: string, i: number) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {calendar.weeks.map((week: (number | null)[], wi: number) => (
                  <tr key={wi}>
                    {week.map((day, di) => {
                      if (!day) return <td key={di}></td>;

                      let className = "";

                      const isSelected = day === selectedDay;

                      const isToday =
                        day === today.day &&
                        calendar.monthIndex === today.month &&
                        calendar.year === today.year;

                      if (isSelected) {
                        className = "date_current";
                      } else if (isToday) {
                        className = "date_today";
                      } else if (calendar.markedDays.includes(day)) {
                        className = "date_day";
                      }


                      return (
                        <td
                          key={di}
                          className={className}
                          onClick={() => onSelectDay?.(day)}
                          style={{ cursor: "pointer" }}
                        >
                          {day}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}
