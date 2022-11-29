import {
  Dispatch,
  MutableRefObject,
  useContext,
  useEffect,
  useState,
} from "react";
import { ModalContext } from "src/context/modalContext";
import { ResultsI } from "src/frontend/movies/useGetMoviesQuery";

interface ReturnI {
  onKeyDownHandler: (e: KeyboardEvent) => void;
  active: number;
  focus: boolean;
}

export const useOnKeyDownHandler = (
  sliderRef: MutableRefObject<HTMLDivElement>,
  movieCardRef: MutableRefObject<HTMLDivElement>,
  setActive: Dispatch<React.SetStateAction<number>>,
  active: number,
  refs: MutableRefObject<MutableRefObject<HTMLDivElement>[]>,
  id: number,
  setActiveCard: Dispatch<React.SetStateAction<number>>,
  activeCard: number,
  maxNumberOfCards: MutableRefObject<number>,
  genresLength: number,
  movies: ResultsI[]
): ReturnI => {
  const [focus, setFocus] = useState<boolean>(false);
  const { toggleModalAction, closeModalAction } = useContext(ModalContext);

  const onKeyDownHandler = (e: KeyboardEvent) => {
    console.log("test", e.key);

    switch (e.key) {
      case "ArrowUp":
        setActive((prevState) => {
          if (prevState === 0) return genresLength;
          return prevState - 1;
        });
        break;
      case "ArrowLeft":
        setActiveCard((prevState) => {
          if (prevState > 0) {
            return (prevState -= 1);
          }
          return 0;
        });

        refs.current.forEach((item) => {
          item.current.scrollLeft -=
            movieCardRef.current.getBoundingClientRect().width -
            maxNumberOfCards.current;
        });

        break;
      case "ArrowRight":
        setActiveCard((prevState) => {
          if (prevState < maxNumberOfCards.current - 1) {
            return (prevState += 1);
          }
          return maxNumberOfCards.current - 1;
        });

        if (activeCard > 4 || activeCard >= maxNumberOfCards.current) {
          refs.current.forEach((item) => {
            item.current.scrollLeft +=
              movieCardRef.current.getBoundingClientRect().width +
              maxNumberOfCards.current;
          });
        }
        break;
      case "ArrowDown":
        setActive((prevState) => {
          if (prevState === genresLength) return 0;
          return prevState + 1;
        });
        break;
      case "Enter":
        toggleModalAction &&
          toggleModalAction({
            title: movies[activeCard].title,
            overview: movies[activeCard].overview,
            voteAverage: movies[activeCard].vote_average,
          });
        break;
      case "Escape":
        closeModalAction && closeModalAction();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    refs.current[id] = sliderRef;

    if (sliderRef.current.tabIndex === 0) {
      sliderRef.current.focus();
      setFocus(true);
    }
  }, []);

  useEffect(() => {
    if (sliderRef.current.tabIndex === active) {
      sliderRef.current.focus();
    }
  }, [active]);

  useEffect(() => {
    sliderRef.current.onkeydown = onKeyDownHandler;
    sliderRef.current.onfocus = () => setFocus(true);
    sliderRef.current.onblur = () => setFocus(false);

    () => {
      sliderRef.current.onkeydown = null;
      sliderRef.current.onfocus = () => null;
      sliderRef.current.onblur = () => null;
    };
  }, [activeCard]);

  return {
    onKeyDownHandler,
    active,
    focus,
  };
};
