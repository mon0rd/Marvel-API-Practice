import "/src/components/header/Header.sass";

function Header() {
  return (
    <div className="Header">
      <h1 className="title_h1">
        <a href="#">Marvel</a> information portal
      </h1>
      <div className="pages">
        <a href="#" className="active">
          Characters
        </a>{" "}
        / <a href="#">Comics</a>
      </div>
    </div>
  );
}

export default Header;
