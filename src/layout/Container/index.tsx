import { ReactNode } from "react";
import { LayoutContainer } from "./styles";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};
