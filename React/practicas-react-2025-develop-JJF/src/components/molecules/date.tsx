export default function Date(day: string, month: string) {
  return (
    <div className="date">
      <h1>{day}</h1>
      <p>{month}</p>
    </div>
  );
}