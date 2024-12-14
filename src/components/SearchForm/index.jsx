import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInputs/MediaTypeInput";
import GenresInput from "./FormInputs/GenresInput";
import RatingInput from "./FormInputs/RatingInput";

const SearchForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      mediaType: "movie",
      genres: [],
      rating: "All",
    },
  });

  const onSubmit = (data) => {
    console.log({ formData: data });
  };

  return (
    <div className="rounded-lg border p-4 shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* <label>Media Type</label> <br />
        <input type="radio" {...register("mediaType")} value="movie" />
        <label>Movie</label>
        <br />
        <input type="radio" {...register("mediaType")} value="tv" />
        <label>TV Show</label>
        <br /> */}

        <FormField
          name="mediaType"
          label="Media Type"
          control={control}
          Component={MediaTypeInput}
        />
        <FormField
          name="genres"
          label="Genres"
          control={control}
          Component={GenresInput}
        />
        <FormField
          name="rating"
          label="Rating"
          control={control}
          Component={RatingInput}
        />

        <input type="submit"></input>
      </form>
    </div>
  );
};

export default SearchForm;
