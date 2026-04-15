import { randomUUID } from "crypto";
import { useState } from "react";
import { RemindersCalendar } from "../organisms/RemindersCalendar";

export default function RemindersCalendarPage() {

  const today = new Date();

  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); 
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  



  const goNextMonth = () => {
    setCurrentMonth(prev => {
      if (prev === 11) {
        setCurrentYear(y => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const goPrevMonth = () => {
    const prevDate = new Date(currentYear, currentMonth - 1);

    if (
      prevDate.getFullYear() < today.getFullYear() ||
      (
        prevDate.getFullYear() === today.getFullYear() &&
        prevDate.getMonth() < today.getMonth()
      )
    ) {
      return;
    }

    setCurrentMonth(prev => {
      if (prev === 0) {
        setCurrentYear(y => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const buildCalendar = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weeks: (number | null)[][] = [];
    let week: (number | null)[] = Array(firstDay).fill(null);

    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      weeks.push([...week, ...Array(7 - week.length).fill(null)]);
    }

    return weeks;
  };

  const calendarWeeks = buildCalendar(currentYear, currentMonth);

  const monthLabel = new Date(currentYear, currentMonth).toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  }).toUpperCase();


  const [selectedDay, setSelectedDay] = useState<number | null>(null);


  const [events, setEvents] = useState<{
    id: string;
    day: number;
    month: number;
    year: number;
    title: string;
    description: string;
    time: string;
  }[]>([]);

  const [editingEventId, setEditingEventId] = useState<string | null>(null);

  const updateEvent = (
    id: string,
    updates: Partial<{ title: string; description: string; time: string }>
  ) => {
    setEvents(prev =>
      prev.map(ev => ev.id === id ? { ...ev, ...updates } : ev)
    );
  };

  const addEventForSelectedDay = () => {
    if (!selectedDay) return;

    const newId = randomUUID();
    const now = new Date();
    const time = now.toTimeString().slice(0, 5);

    setEvents(prev => [
      ...prev,
      {
        id: newId,
        day: selectedDay,
        month: currentMonth,  
        year: currentYear, 
        title: "",
        description: "",
        time
      }

    ]);

    setEditingEventId(newId);
  };

  const selectedDate =
  selectedDay !== null
    ? new Date(currentYear, currentMonth, selectedDay)
    : new Date(currentYear, currentMonth, today.getDate());

  const selectedDateLabel = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).toUpperCase();


  return (
    <div className="reminders_layout">
      <RemindersCalendar
        text="REMINDERS CALENDAR"
        data={{
          selectedDay,
          events: selectedDay
          ? events.filter(e =>
              e.day === selectedDay &&
              e.month === currentMonth &&
              e.year === currentYear
            )
          : [],
          calendar: {
            headers: ["S", "M", "T", "W", "T", "F", "S"],
            weeks: calendarWeeks,
            month: monthLabel,
            
            monthIndex: currentMonth,
            year: currentYear,  

          markedDays: [
            ...new Set(
              events
                .filter(e => e.month === currentMonth && e.year === currentYear)
                .map(e => e.day)
            )
          ]},

          today: {
            title: "TODAY",
            date: selectedDateLabel,
            day: todayDay,
            month: todayMonth,  
            year: todayYear   

          },
          // doctor: {
          //   name: "Call Dr. Smith",
          //   phone: "675 557 89"
          // }
        }}
        onSelectDay={(day) => {
          setSelectedDay(day);
          setEditingEventId(null);
        }}
        onPrevMonth={goPrevMonth}
        onNextMonth={goNextMonth}
        onAddEvent={addEventForSelectedDay}
        onDeleteEvent={(id) =>
          setEvents(prev => prev.filter(e => e.id !== id))
        }
        onEditEvent={setEditingEventId}
        onUpdateEvent={updateEvent}
        editingEventId={editingEventId}
      />
    </div>
  );
}
