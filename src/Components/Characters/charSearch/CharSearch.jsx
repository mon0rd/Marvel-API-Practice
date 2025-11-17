import { useState } from "react";
import "/src/components/characters/charSearch/CharSearch.sass";
import useMarvelService from "/src/services/MarvelService.jsx";
import { useForm, Form } from "react-hook-form";
import Spinner from "/src/components/spinner/Spinner.jsx";

const CharSearch = (props) => {
  const [char, setChar] = useState(null);
  const { getCharacterByName } = useMarvelService();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    searchChar(
      data.character.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
    );
  };

  const searchChar = async (character) => {
    getCharacterByName(character).then(onCharFind);
  };

  const onCharFind = (newchar) => {
    setChar(newchar);
    // console.log(char);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="CharForm">
        <label className="title_h3">Or find a character by name:</label>
        <div>
          <input
            {...register("character")}
            className="CharForm_input"
            placeholder="Enter name"
          />
          <button type="submit" className="red_btn">
            find
          </button>
        </div>
        {char ? (
          <div>
            <div className="CharForm_error">There is! Visit ${name} page?</div>
            <button
              onClick={() => props.onCharSearch(char)}
              className="gray_btn">
              to page
            </button>
          </div>
        ) : null}
      </form>
    </>
  );
};
export default CharSearch;
