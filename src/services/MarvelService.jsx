import useHttp from "/src/components/hooks/useHttp.jsx";

const useMarvelService = () => {
  const _apiBase = "https://marvel-server-zeta.vercel.app/";
  const _apiKey = "apikey=d4eecb0c66dedbfae4eab45d312fc1df";
  const { error, clearError, expanding, setExpanding, getResource } = useHttp();

  const getAllCharacters = async (offset) => {
    const res = await getResource(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transormCharacter);
  };

  const getCharacter = async (offset) => {
    const res = await getResource(
      `${_apiBase}characters?limit=1&offset=${offset}&${_apiKey}`
    );
    return _transormCharacter(res.data.results[0]);
  };

  const getAllComics = async (offset) => {
    const res = await getResource(
      `${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transormComics);
  };

  const _transormCharacter = (char) => {
    return {
      name: char.name,
      text: char.description,
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics,
      id: char.id,
    };
  };

  const _transormComics = (comics) => {
    return {
      title: comics.title,
      text: comics.description,
      thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
      pageCount: comics.pageCount,
      lang: comics.textObjects.languages,
      price: comics.prices[0].price,
      id: comics.id,
    };
  };

  return {
    error,
    clearError,
    expanding,
    setExpanding,
    getResource,
    getAllCharacters,
    getCharacter,
    getAllComics,
  };
};

export default useMarvelService;
