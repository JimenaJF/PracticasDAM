import { useState } from "react";
import Icon from "../atoms/Icon";

interface EventFormProps {
  event?: {
    id: string;
    title: string;
    subtitle: string;
    time: string;
    description: string;
  };
  selectedDay: number;
  selectedMonth: string;
  selectedYear: number;
  onSave: (event: {
    title: string;
    subtitle: string;
    time: string;
    description: string;
  }) => void;
  onCancel: () => void;
}

export default function EventForm({
  event,
  selectedDay,
  selectedMonth,
  selectedYear,
  onSave,
  onCancel
}: EventFormProps) {

  const [title, setTitle] = useState(event?.title       ?? "");
  const [subtitle, setSubtitle] = useState(event?.subtitle    ?? "");
  const [time, setTime] = useState(event?.time        ?? "09:00");
  const [description, setDescription] = useState(event?.description ?? "");
  const [error, setError] = useState(false);

  const handleSave = () => {
    if (!title.trim()) {
      setError(true);
      return;
    }
    setError(false);
    onSave({ title, subtitle, time, description });
  };

  return (
    <div className="ef_card">

      {/* HEADER */}
      <div className="ef_header">
        <input
          type="text"
          placeholder="Event title..."
          value={title}
          onChange={(e) => { setTitle(e.target.value); setError(false); }}
          className={`ef_input_title ${error ? "ef_input_error" : ""}`}
        />
        <Icon
          name="close_cross"
          className="cross"
          alt="closing cross"
          onClick={() => onCancel()}
        />
      </div>

      {/* BODY */}
      <div className="ef_body">

        {error && (
          <div className="ef_error_banner">
            Please enter an event title before saving.
          </div>
        )}

        {/* SUBTÍTULO */}
        <input
          type="text"
          placeholder="Subtitle (optional)"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="ef_input_subtitle"
        />

        {/* FECHA + HORA */}
        <div className="ef_row_time">
          <span className="ef_month_label">
            {selectedDay} {selectedMonth} {selectedYear} /
          </span>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="ef_time_input"
          />
        </div>

        {/* DESCRIPCIÓN */}
        <textarea
          placeholder="Add a description... (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="ef_textarea"
        />

      </div>

      {/* FOOTER */}
      <div className="ef_footer">
        <button className="ef_btn_save"   onClick={handleSave}>SAVE</button>
        <button className="ef_btn_cancel" onClick={onCancel}>CANCEL</button>
      </div>

    </div>
  );
}