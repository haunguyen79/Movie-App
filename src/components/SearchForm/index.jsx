import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInputs/MediaTypeInput";
import GenresInput from "./FormInputs/GenresInput";

const SearchForm = () => {
  const { handleSubmit, control} = useForm();

  const onSubmit = (data) => {
    console.log("Dataform" + JSON.stringify(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label>Media Type</label> <br />
        <input type="radio" {...register("mediaType")} value="movie" />
        <label>Movie</label>
        <br />
        <input type="radio" {...register("mediaType")} value="tv" />
        <label>TV Show</label>
        <br /> */}

        <FormField name="mediaType" label="Media Type" control={control} Component={MediaTypeInput}/>
        <FormField name="genres" label="Genres" control={control} Component={GenresInput}/>

        <input type="submit"></input>
      </form>
    </div>
  );
};

export default SearchForm;
