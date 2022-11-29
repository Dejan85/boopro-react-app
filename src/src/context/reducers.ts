export interface ContentI {
  title: string;
  overview: string;
  voteAverage: number;
}

export interface ModalState {
  toggle: boolean;
  content: ContentI | null;
}

export const initialState: ModalState = {
  toggle: false,
  content: null,
};

export const reducer = (
  state: ModalState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "close-modal":
      return {
        ...state,
        toggle: false,
      };
    case "toggle-modal":
      return {
        ...state,
        toggle: true,
        content: action.payload,
      };

    default:
      return state;
  }
};
