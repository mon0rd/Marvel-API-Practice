import useHttp from "/src/components/hooks/useHttp.jsx";

const useMarvelService = () => {
  const _apiBase = "https://marvel-server-zeta.vercel.app/";
  const _apiKey = "apikey=d4eecb0c66dedbfae4eab45d312fc1df";
  const { error, clearError, getResource } = useHttp();

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
  return { error, clearError, getResource, getAllCharacters, getCharacter };
};

export default useMarvelService;
