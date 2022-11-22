import { useState } from "react";

interface ReturnI {
  onKeyDownHandler: (e: KeyboardEvent) => void;
  active: number;
}

export const useOnKeyDownHandler = (): ReturnI => {
  const [active, setActive] = useState<number>(0);

  const x = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22,
    23,
  ];

  const onKeyDownHandler = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        setActive((prevState) => {
          const result: number = prevState - 5;
          if (result >= 0) {
            return result;
          }
          return prevState;
        });
        break;
      case "ArrowLeft":
        setActive((prevState) => (prevState !== 0 ? prevState - 1 : 0));
        break;
      case "ArrowRight":
        setActive((prevState) =>
          prevState < x.length - 1 ? prevState + 1 : x.length - 1
        );
        break;
      case "ArrowDown":
        setActive((prevState) => {
          const result: number = prevState + 5;
          if (result <= x.length - 1) {
            return result;
          }
          return prevState;
        });
        break;
      default:
        break;
    }
  };

  return {
    onKeyDownHandler,
    active,
  };
};
