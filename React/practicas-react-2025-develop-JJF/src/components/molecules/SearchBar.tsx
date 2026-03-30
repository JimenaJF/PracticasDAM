export default function SearchBar({search}: {search: string}) {
  return (
    <form>
      <input type="search" name="search" id="search" placeholder={search} />
      <button type="submit">{search}</button>
    </form>
  );
}
