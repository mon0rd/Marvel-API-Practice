import "/src/components/comics/banner/Banner.sass";

function Banner() {
  return (
    <div className="Banner">
      <img
        src="/src/assets/Comics/img/png/avengers.png"
        alt="avengers_team"
        className="avengers_team"
      />
      <h2 className="title_h2">
        New comics every week!
        <br></br>
        Stay tuned!
      </h2>
      <img
        src="/src/assets/Comics/img/png/avengers_logo.png"
        alt="avengers_logo"
        className="avengers_logo"
      />
    </div>
  );
}

export default Banner;
