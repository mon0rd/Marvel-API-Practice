import { Link } from "react-router";
import Error from "/src/components/error/Error.jsx";
import "/src/components/pages/404/404.sass";

function Page404() {
  return (
    <div className="Page404">
      <Error />
      <p>Page does not exist</p>
      <Link to="/">
        <button className="red_wide_btn">Back to main page</button>
      </Link>
    </div>
  );
}

export default Page404;
