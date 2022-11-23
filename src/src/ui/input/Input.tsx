import { ComponentType } from "react";
import { InputStyles, StylesPropsI } from "./Input.styles";

interface PropsI extends StylesPropsI {
  name: string;
  placeholder: string;
}

type ComponentProps = React.InputHTMLAttributes<HTMLInputElement>;

const inputWrapping = (
  Component: ComponentType<ComponentProps>,
  props: PropsI
): JSX.Element => {
  return <Component {...props} />;
};

export const Input = (props: PropsI) => inputWrapping(InputStyles, props);
