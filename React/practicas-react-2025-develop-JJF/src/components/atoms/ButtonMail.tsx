
type ButtonProps = {
    onClick?: () => void;
    className?: string;
    value: string;
};

export default function DeleteButton({ onClick, className, value }: ButtonProps) {
    return ( 
    <input 
    type="button" 
    value={value}
    className={className}
    onClick={onClick} /> ); 

}