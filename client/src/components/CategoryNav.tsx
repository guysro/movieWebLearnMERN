import { BaseSyntheticEvent, CSSProperties, useState } from "react";

interface Props {
  CategoriesList: string[];
  SetCat: any;
}

export function CategoryNav({ CategoriesList, SetCat }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const catClick = (event: BaseSyntheticEvent) => {
    setSelectedIndex(event.target.id);
    SetCat(CategoriesList[event.target.id]);
  };

  const getClassName = (index: number) => {
    let classNameNeeded: string = "text-white-50 bg-dark px-3 fw-bold rounded d-flex justify-content-center align-items-center opacity-100";
    if (selectedIndex == index) {
      classNameNeeded = "text-light bg-dark px-3 fw-bold rounded d-flex justify-content-center align-items-center opacity-100";
    }
    return classNameNeeded;
  };
  const getStyle = (index: number) => {
    let styleNeeded: CSSProperties = { cursor: "pointer", fontSize: "1.5rem", width: "6vw", aspectRatio: "2/1", marginTop: "3vh" };
    if (selectedIndex == index) {
      styleNeeded = { cursor: "default", fontSize: "1.5rem", width: "6vw", aspectRatio: "2/1", marginTop: "3vh" };
    }
    return styleNeeded;
  };

  return (
    <span
      style={{ width: "7vw", height: "100%" }}
      className="d-flex flex-column align-items-center bg-dark bg-opacity-25 border-end border-dark"
    >
      {CategoriesList.map((cat, index) => (
        <div
          style={getStyle(index)}
          className={getClassName(index)}
          onClick={catClick}
          key={index.toString()}
          id={index.toString()}
        >
          {cat}
        </div>
      ))}
    </span>
  );
}

// export default CategoryNav;
