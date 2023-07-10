import { ReactNode } from "react";
import PageNavBtn from "./PageNavBtn";

interface Props {
  LogoImg: string;
}

function SimpleNav({ LogoImg }: Props) {
  return (
    <nav className="nav py-3 bg-secondary w-100 border-bottom border-dark position-relative">
      <img
        src={LogoImg}
        width={"90px"}
        className="rounded-pill border ms-4"
      ></img>
      <div className="d-flex gap-3 ms-4 align-items-center">
        <PageNavBtn
          PageName="Home"
          PageUrl=""
        />
        <PageNavBtn
          PageName="Add Movie"
          PageUrl="addMovie"
        />
        <PageNavBtn
          PageName="Admin"
          PageUrl="admin"
        />
      </div>
      <header
        style={{ marginLeft: "25%" }}
        className="text-center align-self-center fw-bold fs-1"
      >
        MovRate
      </header>
    </nav>
  );
}

export default SimpleNav;
