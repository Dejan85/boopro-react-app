import { useReducer } from "react";
import { ContentI, initialState, ModalState, reducer } from "./reducers";

export interface ModalContextI {
  closeModalAction: () => void;
  toggleModalAction: (content: ContentI) => void;
  state: ModalState;
}

export const modalActions = (): ModalContextI => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const closeModalAction = (): void =>
    dispatch({ type: "close-modal", payload: null });

  const toggleModalAction = (content: ContentI): void =>
    dispatch({ type: "toggle-modal", payload: content });

  return {
    closeModalAction,
    toggleModalAction,
    state,
  };
};
