
interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardTitle({ children, className }: CardTitleProps) {
  return <div className={className}>{children}</div>;
}