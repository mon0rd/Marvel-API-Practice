import { NavLink, useNavigate } from "react-router";
import "/src/components/header/Header.sass";

function Header() {
  const navigate = useNavigate();
  const handleKeySelect = (e, element) => {
    if ([" ", "Space", "Enter"].includes(e.key)) {
      e.preventDefault();
      navigate(`${element}`);
    }
  };

  return (
    <div className="Header">
      <h1 className="title_h1">
        <button
          onClick={() => {
            window.location.href = "/";
          }}>
          Marvel
        </button>{" "}
        information portal
      </h1>
      <div className="pages">
        <NavLink
          to="/characters"
          onKeyDown={(e) => handleKeySelect(e, "/characters")}>
          Characters
        </NavLink>{" "}
        /{" "}
        <NavLink to="/comics" onKeyDown={(e) => handleKeySelect(e, "/comics")}>
          Comics
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
