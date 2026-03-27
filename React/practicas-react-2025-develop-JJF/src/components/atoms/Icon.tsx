import { IMAGES } from '@/assets/dictionaryImg';

interface IconProps {
  width?: number;
  alt?: string;
  name: keyof typeof IMAGES | string;
  className?: string;

}

export default function Icon({ width, alt , name, className }: IconProps) {
  return (
    <img
      src={IMAGES[name as keyof typeof IMAGES]}
      alt={alt}
      width={width}
      className={className}
    />
  );
}