import { useState } from "react";
import { useForm } from "react-hook-form";
import "/src/components/characters/charSearch/CharSearch.sass";
import useMarvelService from "/src/services/MarvelService.jsx";
import Spinner from "/src/components/spinner/Spinner.jsx";

const CharSearch = (props) => {
  const [char, setChar] = useState(null);

  const { error, clearError, expanding, setExpanding, getCharacterByName } =
    useMarvelService();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setExpanding(true);
    setChar(null);
    if (data.character) {
      searchChar(
        data.character.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
      );
    }
  };

  const searchChar = async (character) => {
    getCharacterByName(character)
      .then(onCharFind)
      .catch(() => setExpanding(false));
  };

  const onCharFind = (newchar) => {
    setChar(newchar);
    setExpanding(false);
  };

  const onFieldChange = () => {
    setChar(null);
    clearError();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={onFieldChange}
        className="CharSearch">
        <label htmlFor="name" className="title_h3">
          Or find a character by name:
        </label>
        <div className="CharSearch_wrapper">
          <input
            {...register("character", { required: true })}
            aria-invalid={errors.character ? "true" : "false"}
            className="CharSearch_input"
            id="name"
            placeholder="Enter name"
          />
          {expanding ? (
            <Spinner
              style={{
                margin: "auto auto auto 55px",
                "--bar-thickness": "2px",
                height: "38px",
                width: "38px",
              }}
            />
          ) : (
            <button type="submit" className="red_btn">
              find
            </button>
          )}
        </div>

        <div className="CharSearch_wrapper">
          {errors.character?.type === "required" && (
            <p className="CharSearch_status_red">This field is required</p>
          )}
          {error && (
            <p className="CharSearch_status_red">
              The character was not found. Check the name and try again
            </p>
          )}

          {char ? (
            <>
              <div className="CharSearch_status_green">
                There is! Visit {char.name} page?
              </div>
              <button
                type="button"
                onClick={() => props.onCharSearch(char)}
                className="gray_btn">
                to page
              </button>
            </>
          ) : null}
        </div>
      </form>
    </>
  );
};
export default CharSearch;
