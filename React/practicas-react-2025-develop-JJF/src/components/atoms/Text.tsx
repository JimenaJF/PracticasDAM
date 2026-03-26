
interface TextProps { //para mostrar el texto
  
  children: React.ReactNode; //texto que se mostrara dentro del componente
  className?: string; 
}

export default function Text({ children, className }: TextProps) {
  return <span className={className}>{children}</span>;//se muestra el texto con la clase que se le pase por props
}