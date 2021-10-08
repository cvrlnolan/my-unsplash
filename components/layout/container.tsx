import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <>
      <div className="main_container">
        {children}
      </div>
    </>
  );
};

export default Container;
