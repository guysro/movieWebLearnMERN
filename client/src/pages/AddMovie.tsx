import { CSSProperties } from "react";
import SimpleNav from "../components/SimpleNav";
import PageNavBtn from "../components/PageNavBtn";
import AddMovieForm from "../components/AddMovieForm";

const appStyle: CSSProperties = { backgroundColor: "#66aaff", height: "100vh", margin: "0px" };

function AddMovie() {
  return (
    <div
      style={appStyle}
      className="d-flex position-relative flex-column"
    >
      <SimpleNav LogoImg="../images/unnamed.jpg" />
      <AddMovieForm />
    </div>
  );
}

export default AddMovie;
