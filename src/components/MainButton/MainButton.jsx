import "./MainButton.scss";
import { Link } from "react-router-dom";

function MainButton(props) {
  return <Link className="button__btn btn" type="submit" {...props}></Link>;
}

export default MainButton;
