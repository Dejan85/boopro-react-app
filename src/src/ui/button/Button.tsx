import { ComponentType } from "react";
import { ButtonStyles, StylesPropsI } from "./Button.styles";

interface PropsI extends StylesPropsI {
  text: string;
}

type ComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonWrapping = (
  Component: ComponentType<ComponentProps>,
  props: PropsI
): JSX.Element => {
  const { text } = props;
  return <Component {...props}>{text}</Component>;
};

export const Button = (props: PropsI) => buttonWrapping(ButtonStyles, props);
