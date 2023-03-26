

interface ISearchInputProps {
  search: string;
  onSearch: (value: string) => void;
}

const SearchInput = (props: ISearchInputProps) => {
  return (
    <div className="search-input">
      <input
        placeholder="Поиск"
        value={props.search}
        onChange={(e) => props.onSearch(e.target.value)}
      />
    </div>
  );
};
export default SearchInput;
