import { scrolltoHash } from "@/app/helpers";
import { ReactNode } from "react";

type Props = {
  to: string;
  position?: ScrollLogicalPosition;
  children: ReactNode;
};

const PageLink = ({ to, position = "center", children }: Props) => {
  return <a onClick={() => scrolltoHash(to, position)}>{children}</a>;
};

export default PageLink;
