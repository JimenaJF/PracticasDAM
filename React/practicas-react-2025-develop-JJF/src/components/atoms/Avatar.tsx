import { IMAGES } from '@/assets/dictionaryImg';

import Icon from "./Icon";

interface AvatarProps { 
  name: keyof typeof IMAGES; // ell nombre de mi objeto IMAGES

  className?: string;
}

export default function Avatar({ name, className }: AvatarProps) {
  return <Icon 
  name={name} 
  className={className} />;
}
