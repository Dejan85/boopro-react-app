import { ComponentType, ReactNode } from "react";
import {
  ContainerColumnStyles,
  ContainerStyles,
  StylesPropsI,
} from "./Container.styles";

interface PropsI extends StylesPropsI {
  children: ReactNode | ReactNode[];
}

const containerWrapping = (
  Component: ComponentType<PropsI>,
  props: PropsI
): JSX.Element => {
  const { children } = props;
  return <Component {...props}>{children}</Component>;
};

export const Container = (props: PropsI) =>
  containerWrapping(ContainerStyles, props);
export const ContainerColumn = (props: PropsI) =>
  containerWrapping(ContainerColumnStyles, props);
