import Icon from "../atoms/Icon";
import ReminderCalendarMolec from "../molecules/ReminderCalendarMolec";

export function RemindersCalendar({
  text,
  data
}: {
  text: string;
  data: any;
}) {
  const { today, doctor, test, calendar } = data;

  return (
    <section>
      <div className="title">
        <ReminderCalendarMolec text={text} />
      </div>

      <div className="reminders_calendar">
        <div className="container_calendar">

          <div className="reminders">

            <div className="date">
              <h1>{today.title}</h1>
              <p>{today.date}</p>
            </div>

            <div className="doctor">
              <div>
                <Icon name="phone" className="img_phone" />
              </div>
              <div className="dr_name">
                <h1>{doctor.name}</h1>
                <p>{doctor.phone}</p>
              </div>
            </div>

            <div className="test">

              <div className="header_test">
                <div><Icon name="calendar" className="img_calendar" /></div>

                <div className="test_type">
                  <h1>{test.title}</h1>
                  <p>{test.location}</p>
                </div>

                <div className="cross">
                  <Icon name="close_cross" />
                </div>
              </div>

              <div className="body_test">
                <div className="test_date">
                  <p>{test.date} /</p>
                  <h1>{test.time}</h1>
                </div>

                <div className="test_summary">{test.summary}</div>

                <div className="buttons">
                  <input type="button" value="CHANGE" className="btn_reply" />
                  <input type="button" value="DELETE" className="btn_delete" />
                </div>
              </div>
            </div>

          </div>

          <div className="calendar">

            <div className="nav_calendar">
              <div className="arrow_left">
                <Icon name="mail_arrow" className="arrow_closed" id="arrow_left" />
              </div>

              <div className="date">
                <h1>{calendar.month}</h1>
              </div>

              <div className="arrow_right">
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
                      if (!day) {
                        return <td key={di}></td>;
                      }

                      let className = "";

                      if (day === calendar.currentDay) {
                        className = "date_current";
                      } else if (calendar.markedDays.includes(day)) {
                        className = "date_day";
                      }

                        return (
                          <td key={di} className={className}>
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
``