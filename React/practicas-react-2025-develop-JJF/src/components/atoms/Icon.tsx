import { IMAGES } from '@/assets/dictionaryImg';

interface IconProps {
  width?: number;
  alt?: string;
  name: keyof typeof IMAGES | string;
  className?: string;
  id?: string;
  onClick?:  (e: React.MouseEvent<HTMLImageElement>) => void;

}

export default function Icon({ width, alt , name, className, id, onClick }: IconProps) {
  return (
    <img
      src={IMAGES[name as keyof typeof IMAGES]}
      alt={alt}
      width={width}
      className={className}
      id={id}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    />
  );
}