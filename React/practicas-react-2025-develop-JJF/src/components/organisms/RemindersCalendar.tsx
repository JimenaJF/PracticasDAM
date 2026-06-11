import { useState } from "react";
import Icon from "../atoms/Icon";
import ReminderCalendarMolec from "../molecules/ReminderCalendarMolec";
import EventForm from "./EventForm";

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
  onNextMonth,
  collapsedIds,
  onToggleOpen,
  onToggleClose,
}: {
  text: string;
  data: any;
  onSelectDay?: (day: number) => void;
  onAddEvent?: (newEvent: {
    title: string;
    subtitle: string;
    time: string;
    description: string;
  }) => void;
  onDeleteEvent?: (id: string) => void;
  onEditEvent?: (id: string | null) => void;
  onUpdateEvent?: (id: string, updates: any) => void;
  editingEventId?: string | null;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  collapsedIds?: Set<string>;
  onToggleOpen?: (id: string) => void;
  onToggleClose?: (id: string) => void;
}) {

  const { today, calendar, selectedDay, events } = data;
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any | null>(null);

  const handleSaveEvent = (newEvent: {
    title: string;
    subtitle: string;
    time: string;
    description: string;
  }) => {
    onAddEvent?.(newEvent);
    setShowForm(false);
  };

  const selectedDate = new Date(calendar.year, calendar.monthIndex, selectedDay);
  const monthLabel = selectedDate.toLocaleDateString("en-GB", { month: "long" }).toUpperCase();
  const weekdayLabel = selectedDate.toLocaleDateString("en-GB", { weekday: "long" }).toUpperCase();
  const dateLabel = `${selectedDay} ${monthLabel} / ${weekdayLabel}`;

  const isToday =
    selectedDay === today.day &&
    calendar.monthIndex === today.month &&
    calendar.year === today.year;

  return (
    <section>

      {/* TITULO */}
      <div className="title">
        <ReminderCalendarMolec text={text} />
      </div>

      <div className="reminders_calendar">
        <div className="container_calendar">

          {/* ── PANEL IZQUIERDO ── */}
          <div className="reminders">

            {/* FECHA */}
            {!showForm && (
              <div className="date">
                <h1>{isToday ? "TODAY" : weekdayLabel}</h1>
                <p>{dateLabel}</p>
              </div>
            )}

            {/* ZONA SCROLLEABLE */}
            <div className="events_scroll">

              {(!events || events.length === 0) && (
                <p>No events for this day</p>
              )}

              {events && events.length > 0 && (
                <>
                  {events.map((ev: any) => {
                    const isEditing = editingEventId === ev.id;
                    const isCollapsed = collapsedIds?.has(ev.id) ?? false;

                    return (
                      <div key={ev.id} className="ev_card">

                        {/* ── HEADER DE LA TARJETA ── */}
                        <div
                          className="doctor"
                          onClick={() => {
                            if (isCollapsed) onToggleOpen?.(ev.id);
                          }}
                          style={{ cursor: isCollapsed ? "pointer" : "default" }}
                        >
                          <Icon name="calendar" className="img_calendar" />

                          <div className="">
                            {isEditing ? (
                              <input
                                className="dr_name"
                                value={ev.title}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) =>
                                  onUpdateEvent?.(ev.id, { title: e.target.value })
                                }
                              />
                            ) : (
                              <h2 className="doctor">{ev.title}</h2>
                            )}

                            {isEditing ? (
                              <input
                                className="dr_name"
                                value={ev.subtitle || ""}
                                placeholder="Subtitle..."
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) =>
                                  onUpdateEvent?.(ev.id, { subtitle: e.target.value })
                                }
                              />
                            ) : (
                              ev.subtitle && (
                                <span className="doctor">{ev.subtitle}</span>
                              )
                            )}
                          </div>

                          {/* X — solo visible cuando está abierta, solo cierra */}
                          {!isCollapsed && (
                            <Icon
                              name="close_cross"
                              className="cross"
                              alt="closing cross"
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                onToggleClose?.(ev.id); 
                              }}
                            />
                          )}
                        </div>

                        {/* ── BODY DE LA TARJETA ── */}
                        {!isCollapsed && (
                          <div className="ev_body">

                            {/* FECHA Y HORA */}
                            <div className="ev_datetime">
                              <span className="ev_date_label">
                                {selectedDay} {calendar.month} /
                              </span>
                              {isEditing ? (
                                <input
                                  type="time"
                                  className="ev_time_input"
                                  value={ev.time}
                                  onChange={(e) =>
                                    onUpdateEvent?.(ev.id, { time: e.target.value })
                                  }
                                />
                              ) : (
                                <strong className="ev_time">{ev.time}</strong>
                              )}
                            </div>

                            {/* DESCRIPCION */}
                            {isEditing ? (
                              <textarea
                                className="ev_textarea"
                                value={ev.description}
                                onChange={(e) =>
                                  onUpdateEvent?.(ev.id, { description: e.target.value })
                                }
                              />
                            ) : (
                              ev.description && (
                                <p className="ev_desc">{ev.description}</p>
                              )
                            )}

                            {/* BOTONES */}
                            <div className="ev_buttons">
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
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setEditingEvent(ev);
                                  }}
                                />
                              )}
                              <input
                                type="button"
                                value="DELETE"
                                className="btn_delete"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onDeleteEvent?.(ev.id);
                                }}
                              />
                            </div>

                          </div>
                        )}

                      </div>
                    );
                  })}
                </>
              )}

            </div>
            {/* FIN events_scroll */}

            <input
              type="button"
              value="ADD EVENT"
              className="btn_reply"
              onClick={() => setShowForm(true)}
            />

          </div>
          {/* FIN reminders */}

          {/* ── CALENDARIO ── */}
          <div className="calendar">
            <div className="nav_calendar">
              <div className="arrow_left" onClick={onPrevMonth}>
                <Icon name="mail_arrow" id="arrow_left" className="arrow_closed" />
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

                      const isSelected = day === selectedDay;
                      const isToday =
                        day === today.day &&
                        calendar.monthIndex === today.month &&
                        calendar.year === today.year;
                      const hasEvent = calendar.markedDays.includes(day);

                      const classes = [
                        isSelected ? "date_current" :"",
                        isToday? "date_today": "",
                        hasEvent? "date_day": "",
                      ]
                        .filter(Boolean)
                        .join(" ");

                      return (
                        <td
                          key={di}
                          className={classes}
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

      {/* MODAL — AÑADIR EVENTO */}
      {showForm && (
        <div className="add_event_overlay">
          <EventForm
            selectedDay={selectedDay}
            selectedMonth={calendar.month}
            selectedYear={calendar.year}
            onSave={handleSaveEvent}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      {/* MODAL — EDITAR EVENTO */}
      {editingEvent && (
        <div className="add_event_overlay">
          <EventForm
            event={editingEvent}
            selectedDay={selectedDay}
            selectedMonth={calendar.month}
            selectedYear={calendar.year}
            onSave={(updates) => {
              onUpdateEvent?.(editingEvent.id, updates);
              setEditingEvent(null);
            }}
            onCancel={() => setEditingEvent(null)}
          />
        </div>
      )}

    </section>
  );
}