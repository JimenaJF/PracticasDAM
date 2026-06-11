
type ButtonProps = {
    onClick?: () => void;
    className?: string;
    value: string;
    type?: "button" | "submit" | "reset";
};

export default function DeleteButton({ onClick, type = "button", className, value }: ButtonProps) {
    return ( 
    <button
    type={type} 
    className={className}
    onClick={onClick}>
    {value}
    </button> 

    ); 

}



/* type ButtonProps = {
    onClick?: () => void;
    className?: string;
    value: string;
    type?: "button" | "submit" | "reset";
};

export default function DeleteButton({ onClick, type = "button", value}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            >
            {value}
        </button>
    );
} */