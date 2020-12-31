import * as React from "react";

export const Light = () => {
  React.useEffect(() => {
    // @ts-ignore
    import("@learning/styles/prism-light.css").then(() => {});
  }, []);

  return <></>;
};
