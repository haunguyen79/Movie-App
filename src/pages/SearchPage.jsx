import SearchForm from "@components/SearchForm";
import useFetch from "@hooks/useFetch";
import { useState } from "react";

const SearchPage = () => {
  const [searchFormValue, setSearchFormValue] = useState({
    mediaType: "movie",
    genres: [],
    rating: "All",
  });

  // const { data } = useFetch({
  //   url: `/discover/movie`,
  // });

  console.log({searchFormValue})

  return (
    <div className="container flex-col">
      <p className="text-2xl font-bold">Search</p>
      <div className="flex gap-6">
        <div className="flex-1">
          <SearchForm setSearchFormValue={setSearchFormValue} />
        </div>
        <div className="flex-[3]"> Result </div>
      </div>
    </div>
  );
};

export default SearchPage;
