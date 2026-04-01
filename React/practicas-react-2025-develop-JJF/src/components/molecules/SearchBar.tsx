
export default function SearchBar({ value,onChange
}: { value: string; onChange: (value: string) => void;
}) {
  return (
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
