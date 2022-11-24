import axios from "axios";
import { useEffect, useState } from "react";
import { getMovies } from "src/api/methods";
import { Movies } from "src/frontend/movies";
import { useOnKeyDownHandler } from "src/utils";

export const MoviesPage: React.FC = (): JSX.Element => {
  const { active, onKeyDownHandler } = useOnKeyDownHandler();

  const x = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22,
    23,
  ];

  useEffect(() => {
    getMovies(12).then((res) => {
      console.log("test res", res);
    });

    window.onkeydown = onKeyDownHandler;
    () => {
      window.onkeydown = null;
    };
  }, []);

  return (
    // <div
    //   className="App"
    //   style={{
    //     display: "flex",
    //     flexWrap: "wrap",
    //     width: "1000px",
    //     outline: "1px solid red",
    //   }}
    // >
    //   {x.map((item, index) => {
    //     return (
    //       <div
    //         key={index}
    //         style={{
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           width: "200px",
    //           height: "200px",
    //           // background: "yellow",
    //           color: "black",
    //           outline: active === index ? "2px solid red" : "1px solid green",
    //           background: active === index ? "green" : "yellow",
    //         }}
    //       >
    //         {item}
    //       </div>
    //     );
    //   })}
    // </div>
    <Movies />
  );
};
