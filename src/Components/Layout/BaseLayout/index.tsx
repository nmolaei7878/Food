import React from "react";

interface Props {
  children?: React.ReactNode;
}

const BaseLayout: React.FC<Props> = (props) => {
  return <>{props.children}</>;
};

export default BaseLayout;
