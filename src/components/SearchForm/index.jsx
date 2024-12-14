import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInputs/MediaTypeInput";

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
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default SearchForm;
