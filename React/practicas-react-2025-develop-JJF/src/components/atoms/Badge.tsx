
interface BadgeProps { // para mostrar datos pequeños como el numero de las notificaciones
  value: number | string; //el valor que ira dentro de badge
  className?: string;
  size?: number;
}

export default function Badge({ value, className, size = 20 }: BadgeProps) {
  return (
    <span //contenedor de badge
      className={`badge ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
      }}
    >
      {value}
    </span>
  );
}