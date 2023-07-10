import React from "react";
import { Link } from "react-router-dom";

interface Props {
  PageName: string;
  PageUrl: string;
}
const PageNavBtn = ({ PageName, PageUrl }: Props) => {
  return (
    <Link
      className="text-decoration-none h-75 "
      to={"/" + PageUrl}
    >
      <div
        style={{ cursor: "pointer", fontSize: "150%" }}
        className=" text-white-50 bg-dark px-3 h-100 fw-bold rounded d-flex justify-content-center align-items-center"
      >
        {PageName}
      </div>
    </Link>
  );
};

export default PageNavBtn;
