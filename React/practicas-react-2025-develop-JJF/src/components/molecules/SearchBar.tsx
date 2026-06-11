import { useEffect, useState } from "react";
import ButtonMail from "../atoms/ButtonMail";


export default function SearchBar({value, onSearch }: { value: string; onSearch: (value: string) => void;
}) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value); //guarda el valor del input en el estado local cada vez que cambie el valor pasado por props
  }, [value]);

  return (

     <form
      className="search_bar"
      onSubmit={(e) => e.preventDefault()} // Evita recargar la pag
    >
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search"
      value={inputValue}
      onChange={(e) => {
          setInputValue(e.target.value); 
          onSearch(e.target.value);    
      }}
    />
    <ButtonMail
        onClick={() => onSearch(inputValue)}
        type="submit"
        value="Search"
        className="btn-search"
      />
    </form>
  );
}


