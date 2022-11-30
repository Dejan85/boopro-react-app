import { createContext } from "react";
import { modalActions } from "./action";
import { ContentI } from "./reducers";

interface ContextI {
  closeModalAction: () => void;
  toggleModalAction: (content: ContentI) => void;
  toggle: boolean;
  content: ContentI | null;
}

const ModalContext = createContext<Partial<ContextI>>({});

const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const { state, toggleModalAction, closeModalAction } = modalActions();

  return (
    <ModalContext.Provider
      value={{
        toggleModalAction,
        closeModalAction,
        ...state,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
