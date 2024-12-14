import SearchForm from "@components/SearchForm";

const SearchPage = () => {

  return (
    <div className="container flex-col">
      <p className="text-2xl font-bold">Search</p>
      <div className="flex">
        <div className="flex-1">
          <SearchForm />
        </div>
        <div className="flex-[3]"> Result </div>
      </div>
    </div>
  );
};

export default SearchPage;
