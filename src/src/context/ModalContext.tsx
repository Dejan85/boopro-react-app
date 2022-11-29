import { createContext } from "react";
import { modalActions } from "./action";

const ModalContext = createContext<any>({});

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
