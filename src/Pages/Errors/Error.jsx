import "./errors.scss";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="errorContainer">
      <img
        src="https://studio.uxpincdn.com/studio/wp-content/uploads/2021/06/10-error-404-page-examples-for-UX-design.png.webp"
        alt="error message"
      />
      <h3>
        Sorry, this page has not been created yet. We're still working on it!
      </h3>
      <p>Check back later for updates.</p>
      <button>
        <Link to={"/"}>Go Back Home</Link>
      </button>
    </div>
  );
}
