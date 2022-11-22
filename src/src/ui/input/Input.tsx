import { ComponentType, ReactNode } from "react";
import { InputStyles, StylesPropsI } from "./Input.styles";

interface PropsI extends StylesPropsI {
  children: ReactNode | ReactNode[];
}

const inputWrapping = (
  Component: ComponentType<PropsI>,
  props: PropsI
): JSX.Element => {
  const { children } = props;
  return <Component {...props}>{children}</Component>;
};

export const Input = (props: PropsI) => inputWrapping(InputStyles, props);
