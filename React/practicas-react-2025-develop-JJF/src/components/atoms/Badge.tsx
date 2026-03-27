
interface BadgeProps { // para mostrar datos pequeños como el numero de las notificaciones
  value: number | string; //el valor que ira dentro de badge
  className?: string;
}

export default function Badge({ value, className }: BadgeProps) {
  return (
    <div className={`badge ${className ?? ""}`}>
      {value}
    </div>

  );
}