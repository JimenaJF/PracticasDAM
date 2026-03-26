import { IMAGES } from '@/assets/dictionaryImg';

import Icon from "./Icon";

interface AvatarProps { 
  name: keyof typeof IMAGES; // ell nombre de mi objeto IMAGES
  size?: number;
  className?: string;
}

export default function Avatar({ name, size = 40, className }: AvatarProps) {
  return <Icon 
  name={name} 
  width={size} 
  className={className} />;
}
