class MarvelService {
  _apiBase = "https://marvel-server-zeta.vercel.app/";
  _apiKey = "apikey=d4eecb0c66dedbfae4eab45d312fc1df";
  getResource = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async (offset) => {
    const res = await this.getResource(
      `${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`
    );
    return res.data.results.map(this._transormCharacter);
  };

  getCharacter = async (offset) => {
    const res = await this.getResource(
      `${this._apiBase}characters?limit=1&offset=${offset}&${this._apiKey}`
    );
    return this._transormCharacter(res.data.results[0]);
  };

  _transormCharacter = (char) => {
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
}

export default MarvelService;
