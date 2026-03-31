
interface TextProps { //para mostrar el texto
  
  children: React.ReactNode; //texto que se mostrara dentro del componente
  className?: string; 
  onClick?: () => void; //funcion que se ejecutara al hacer click en el texto
}

export default function Text({ children, className, onClick }: TextProps) {
  return (
    <span className={className} onClick={onClick}>
      {children}
    </span>
  ); //se muestra el texto con la clase que se le pase por props
}